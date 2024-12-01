import express from "express";
import errorHandler from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("Hi this site is working")
})



app.use(
    cors({
        origin: ["http://localhost:5173","https://akshat-kumar-sinha-portfolio.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


import router from "./routes/oneroute.js"

app.use("/api/v1",router)


app.use(errorHandler)

export default app;
