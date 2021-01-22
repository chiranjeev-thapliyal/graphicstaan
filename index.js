const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

const hostname = "0.0.0.0";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const mailjet = require("node-mailjet").connect(
  "7e511c42125d75fe05234a3c9e500869",
  "a3c0c2045db458d24a90bed4746eb760"
);

app.post("/contact/send", async (req, res) => {
  const email = req.body.EMAIL;
  const name = req.body.NAME || "Customer";
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "graphicstaan.wow@gmail.com",
          Name: "Graphicstaan Team",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: `Welcome ${name.toUpperCase()} to Graphicstaan`,
        TextPart: `Dear ${name}, we are a team of young professionals willing to help people with their digital needs!`,
        HTMLPart: `<h2>Hi ${name}!</h2><br><h3>We are glad that you chose <a href="graphicstaan.in">Graphicstaan</a>, and we are eager to help you out!</h3>`,
      },
    ],
  });
  request
    .then((result) => {
      res.status(200).send('<script>window.location.href="/";</script>');
    })
    .catch((err) => {
      res.status(400).send('<script>window.location.href="/";</script>');
    });
});

app.get("/", (req, res, next) => {
  res.render("homepage/home");
});

app.get("/:service/:part", (req, res, next) => {
  res.render(`${req.params.service}/${req.params.part}`);
});

app.get("*", (req, res, next) => {
  res.status(404).send("Page Not Found!");
});

const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
  console.log("App Started!");
});
