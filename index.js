const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Simple One-Page Website</title>
        <style>
          body {
            font-family: sans-serif;
            background-color: #333;
            color: #fff;
            text-align: center;
          }
          h1 {
            font-size: 36px;
            color: #0073e6;
            margin-top: 50px;
          }
          p {
            margin-top: 20px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to my website!</h1>
        <p>This is a simple one-page website built with Node.js and Express.</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Website listening on port 3000!");
});

