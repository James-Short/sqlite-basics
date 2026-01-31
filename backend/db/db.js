import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db", "blocks.db");
const schemaPath = path.join(process.cwd(), "db", "schema.sql");

const db = new sqlite3.Database(dbPath);

const schema = fs.readFileSync(schemaPath, "utf8");
db.exec(schema);

export function execute(sql, params=[]){
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if(err){
                reject(err);
            } else{
                resolve()
            }
        });
    });
}




