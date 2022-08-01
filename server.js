const express = require("express");
const app = express();
const port = 8383;
const { db } = require("./firebase");
const { readDb, writeDb } = require("./dbFunctions");

app.use(express.static("public"));
app.use(express.json());

//post routes
app.post("/", async (req, res) => {
  const { name, email, phone, comment } = req.body;

  if (!name || !email || !phone) {
    res.status(400).send({ status: "error" });
  }
  const docRef = db.collection("poles").doc("poles");
  const response = await docRef.set(
    {
      [id]: {
        question,
        options: Array.from(options).reduce((acc, curr) => {
          return { ...acc, [curr]: 0 };
        }, {}),
      },
    },
    { merge: true }
  );

  console.log(id, question, options);
  res.redirect("/" + id);
});
