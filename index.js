import express from "express";
import { createDate, readFolder } from "./fs-utils.js";

const Server = express();
const Port=8000;

//API endpoint to '/create-file'
Server.get("/create-file", (req, res) => {
  createDate();
  res.send({ msg: "File created successfully" });
});

//API endpoint to '/read-files'
Server.get("/read-files", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

//Acknopwledge API is running
Server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}/`);
});