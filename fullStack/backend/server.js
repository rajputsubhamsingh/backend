// const express = require('express')
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "this is a joke1",
    },
    {
      id: 2,
      title: "B joke",
      content: "this is a joke2",
    },
    {
      id: 3,
      title: "C joke",
      content: "this is a joke3",
    },
    {
      id: 4,
      title: "D joke",
      content: "this is a joke4",
    },
    {
      id: 5,
      title: "E joke",
      content: "this is a joke5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
