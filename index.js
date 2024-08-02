const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input format. Data should be an array.",
    });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[A-Za-z]$/.test(item));

  const highest_alphabet =
    alphabets.length > 0
      ? [
          alphabets.sort((a, b) =>
            a.toLowerCase() < b.toLowerCase() ? 1 : -1
          )[0],
        ]
      : [];

  res.status(200).json({
    is_success: true,
    user_id: "Stuti_Juneja_16032003",
    email: "sr8037@srmist.edu.in",
    roll_number: "RA2111026010174",
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
