// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { getData,aqppendNewsData }  from "./fetch.js";
let query = localStorage.getItem("query")
let containernews = document.getElementById("results");
getData(query).then((data)=>{
    aqppendNewsData(data,containernews);
})



