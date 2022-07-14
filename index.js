const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

const config = require("./config/key");
const { User } = require("./models/User");

//application/x-www-form-urlencoded 이런 데이터를 분석
app.use(bodyParser.urlencoded({ extented: true })); //bodyparser은 client에서 오는 정보를 서버에서 분석해서 가져오게 하는것.
//application/json 를 분석
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! hehehehe");
});

app.post("/register", (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어주기
  {
    id: "helllo";
  }
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
