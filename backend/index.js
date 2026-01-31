import "./db/db.js"
import { createBlock, deleteBlock } from "./db/queries.js";
import express from "express";

const app = express();

app.use(express.json());

app.post("/submitBlockAddition", async (req, res) => {
    const { name, color } = req.body;

    await createBlock(name, color);

    console.log(name, color);
    res.send("All done");
})

app.post("/submitBlockDeletion", async (req, res) => {
    const { id } = req.body;

    await deleteBlock(id);

    res.send("All done");
})


app.listen(8080, () => {
    console.log("Backend running on port 8080");
})