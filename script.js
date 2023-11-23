const accessKey="EVIRohO8ywhVNfDaq3uKNbXQgFT2rSRmLZYbIrBvmN8";
let searchForm=document.getElementById("search");
let searchBox=document.getElementById("image-search");
let searchResult=document.getElementById("search-result");
let showMore=document.getElementById("show-more");

let keyword="";
let page=1;

 function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    fetch(url).then((response)=>{

    const data=response.json();
    return data;

    }).then((data)=>{
        const results=data.results;

        if(page===1){
            searchResult.innerHTML="";
        }

        results.map((result)=>{
        
            const image=document.createElement("img")
            image.src=result.urls.small;
            const imageLink=document.createElement("a");
            imageLink.href=result.links.html;
            imageLink.target="_blank";
        
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
            
        })
        showMore.style.display="block";
        })
 }
    

searchForm.addEventListener("submit",(e)=>{
e.preventDefault();
page=1;
searchImages();
})

showMore.addEventListener('click',()=>{
    page++;
    searchImages();
})
