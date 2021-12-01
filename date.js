module.exports.getDate=function(){
let today=new Date();
    
let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};

let day =today.toLocaleDateString("hi-IN",options);
return day;
}


module.exports.getDay=function(){
let today=new Date();
    
let options={
  weekday:"long",
};

let day =today.toLocaleDateString("hi-IN",options);
return day;
}