let getData = async(qvalue)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${qvalue}`);

        let data = await res.json();

        console.log(data.articles);
        return data.articles

    }catch(err){
        console.log('err:', err)
    }
}


let aqppendNewsData = (data,containernews) =>{
    data.forEach(({urlToImage,title,description}) =>{
       let div = document.createElement("div");

       let img = document.createElement("img")
       img.src = urlToImage;

       let newstitle = document.createElement("h3");
       newstitle.innerText = title;

       let desc = document.createElement("p");
       desc.innerText = description;

       div.append(img,newstitle,description);
       containernews.append(div);
    })
}
export { getData ,aqppendNewsData};


