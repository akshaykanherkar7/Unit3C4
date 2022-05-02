// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let search = async(url) =>{
    try{
       
        let res = await fetch(url);
        let data = await res.json();
        console.log('data:', data.articles)
        aqppendData(data.articles)

    }catch(err){
        console.log('err:', err)

    }
}

let aqppendData = (data) =>{
    document.querySelector(".news").innerHTML = null;
    data.forEach(({urlToImage,title,description}) =>{
    
       let div = document.createElement("div");

       let img = document.createElement("img")
       img.src = urlToImage;

       let newstitle = document.createElement("h3");
       newstitle.innerText = title;

       let desc = document.createElement("p");
       desc.innerText = description;

       div.append(img,newstitle,description);
       document.querySelector(".news").append(div);
    })
}


let sidebar = document.getElementById("sidebar").children;
function coSearch(){
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    search(url)
}

for(let x of sidebar){
    x.addEventListener("click",coSearch);
}










// import { getData,aqppendNewsData }  from "./fetch.js";

// let searchNews = (e) =>{
//     if(e.key === "Enter")
//     {
//         window.location.href = "search.html";
//         let qvalue = document.getElementById("search_input").value;
//         getData(qvalue).then((data) =>{
//             let containernews = document.getElementById("results");
//             containernews.innerHTML = null;
//             aqppendNewsData(data,containernews);
//         })
//     }
// }

let searchNews = (e) =>{
        if(e.key === "Enter")
        {
            let qvalue = document.getElementById("search_input").value;
            localStorage.setItem("query", qvalue)
            window.location.href = "search.html";
    }   }

document.getElementById("search_input").addEventListener("keydown", searchNews)



    
