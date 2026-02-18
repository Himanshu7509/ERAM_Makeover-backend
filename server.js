const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:5173", "https://makeover-booking.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas Connected Successfully 🚀");
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        );
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });
