const express=require("express");
const bp=require("body-parser");
const date=require(__dirname+"/date.js");

app=express();
app.set("view engine","ejs");
app.use(bp.urlencoded({extended:true}));
app.use(express.static("public"));
let items=[];
let works=[];

app.get("/",function(req,res){
    let day=date.getDate();
    res.render("list",{kindsOfDay:day,newListItem:items});
});



app.post("/",function(req,res){
     let item=req.body.newItem;
     if(req.body.list==="work"){
        works.push(item);
        res.redirect("/work");
     }else{
     items.push(item);
     res.redirect("/");
     }
});

app.get("/work",function(req,res){
    
    res.render("list",{kindsOfDay:"work",newListItem:works});
});


app.listen(3000,function(req,res){
    console.log("server started");
});




// if (today.getDay()===4 || today.getDay()===0) {
//   //  res.send("yaa it's working day");
//   //res.sendFile(__dirname+"/index.html");
//   day="weekend";
// }
//  else{
//    // res.send("Boo ! I hve to work");
//    day="weekday";
// }

// var day="";
//    switch (currentDay) {
//      case 0:
//        day="Sunday";
//        break;
//      case 1:
//        day="Monday";
//        break;
//      case 2:
//        day="Tuesday";
//        break;
//      case 3:
//        day="Wednesday";
//        break;
//      case 4:
//        day="Thursday";
//        break;
//      case 5:
//        day="Friday";
//        break;
//      case 6:
//        day="Saturday";
//        break;
   
//      default:
//        console.log("Error : Current day is equal to: "+currentDay);
//        break;
//    }   
//    res.render("list",{kindsOfDay:day});