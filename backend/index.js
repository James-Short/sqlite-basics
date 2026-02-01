import "./db/db.js"
import { createBlock, deleteBlock, fetchAllBlocks } from "./db/queries.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.post("/SubmitBlockAddition", async (req, res) => {
    const { name, color } = req.body;

    await createBlock(name, color);

    
    res.send(await fetchAllBlocks());
})

app.post("/SubmitBlockDeletion", async (req, res) => {
    const { id } = req.body;

    await deleteBlock(id);

    res.send(await fetchAllBlocks());
})

app.get("/FetchAllBlocks", async (req, res) => {
    res.send(await fetchAllBlocks())
})



app.listen(8080, () => {
    console.log("Backend running on port 8080");
})