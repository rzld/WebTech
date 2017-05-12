"use strict";
var jsdom = require("jsdom");
var html = "<!DOCTYPE html><html>Hello world!</html>";
jsdom.env(html, go);

function go(err, window) {
    console.log("Check: ", window.document.querySelector("html"));
}