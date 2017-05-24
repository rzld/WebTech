"use strict"
var sql = require("sqlite3").verbose();
var db = new sql.Database("data.db");

//document.getElementById("register").addEventListener("submit", myFunction);
document.getElementById("register").onsubmit = function() {myFunction()};

function myFunction() {
  //insert data to database
  //email, fullname, username, pswd
  //var email = document.getElementById("email").value;
  //var fname = document.getElementById("fullname").value;
  //var uname = document.getElementById("username").value;
  //var pswd = document.getElementById("pswd").value;
  db.serialize(function () {
    db.run("insert into animals values(64, 'cat')");
  })
}
