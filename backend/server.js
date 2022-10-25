
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");




//pdf
const dotenv = require("dotenv");


dotenv.config();




const app = express();
const PORT = process.env.PORT || 8080;




app.use(cors({
  origin: '*'
}));


app.get("/" , (req,res)=>{
  res.json("server has started liiiiiiiiiiii")
})



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/upload", require("./routes/FileUploadRoutess"));



mongoose.connect(
  process.env.MDB_CONNECT_STRING, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
