const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const mailchimp = require("@mailchimp/mailchimp_marketing");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));
mailchimp.setConfig({
  apiKey: "c23045252ca88f4f58f27632030945a5-us7",
  server: "us7"
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on port 3000")
})

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.get("/booking", function(req,res){
  res.sendFile(__dirname + "/booking.html")
});

//post request start
app.post("/booking",function(req,res){
  const listID = "14ca749c20"
  const first = req.body.firstName;
  const last = req.body.lastName;
  const option = req.body.option;   //value html attribute
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  // console.log(message)
  const subscriber = {
    first : first,
    last: last,
    email : email,
    phone : phone,
    message : message,
    option : option
  }
  async function sendData(){
    const response = await mailchimp.lists.addListMember(listID, {
      email_address : email,
      status: "subscribed",
      merge_fields: {
        FNAME : subscriber.first,
        LNAME: subscriber.last,
        PHONE: subscriber.phone,
        MESSAGE: subscriber.message,
        SERVICE: subscriber.option
      }
    });
    res.sendFile(__dirname + "/success.html");
    console.log("Contact successfully added to list")
  }
   sendData().catch(e => res.sendFile(__dirname + "/failure.html"))
})
