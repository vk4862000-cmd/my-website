const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


// ===============================
// CREATE RAZORPAY ORDER
// ===============================

app.post("/create-order", async (req, res) => {

    try {

        const amount = Number(req.body.amount);

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount"
            });
        }

        // INR -> paise
        const amountInPaise = Math.round(amount * 100);

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: "store_" + Date.now(),
            payment_capture: 1
        };

        const order =
            await razorpay.orders.create(options);

        res.json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to create payment order"
        });

    }

});


// ===============================
// VERIFY PAYMENT
// ===============================

app.post("/verify-payment", async (req, res) => {

    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;


        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {

            return res.status(400).json({
                success: false,
                message: "Payment details missing"
            });

        }


        const body =
            razorpay_order_id +
            "|" +
            razorpay_payment_id;


        const expectedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(body)
                .digest("hex");


        const isValid =
            crypto.timingSafeEqual(
                Buffer.from(expectedSignature),
                Buffer.from(razorpay_signature)
            );


        if (!isValid) {

            return res.status(400).json({
                success: false,
                message: "Payment verification failed"
            });

        }


        console.log(
            "Payment verified:",
            razorpay_payment_id
        );


        res.json({
            success: true,
            message: "Payment verified successfully",
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Verification error"
        });

    }

});


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `My Store running at http://localhost:${PORT}`
    );

});
