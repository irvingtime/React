import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import csvToJson from "convert-csv-to-json"
dotenv.config();

const app=express();
app.use(cors())