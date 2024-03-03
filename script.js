let toggle = false; 
let specialCat = false;
const rate_text = document.querySelector("#button-rate")
let rating = 0;
let catCounted = 0;
let randomNum = 0;
const ten_only = document.querySelector('#ten-button')
const warning = document.querySelector("#warning")
const color_change = document.querySelector(".button");
const cat_rating = document.querySelector("#counter-text")
let output_container = document.querySelector("#output-image");
const random_image = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
const headers = new Headers({
    "Content-Type":" application/json",
    "x-api-key": "live_keyFLAzFSqePoEfpuZoy2dUqzEw3jqLe5tR527tg7d4GONWAF8ndnS0mfkNDlTHS"
})

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
const getCatUrl = async (url) => {
    
    try {
        const response = await fetch(url, requestOptions);
        const imageData = await response.json();
        return imageData[0];
    } catch (error) {
        console.error('Error fetching cat images:', error);
        throw error; 
    }
    
}


const checkCondition = () =>{
    if(!toggle){
        buttonClick.disabled = true;  
        // warning.innerHTML = "Please select a rating before continuing"
        buttonClick.style.backgroundColor = "red";
        rate_text.style.display = "block";
        warning.innerHTML=""
    }
    else{
        console.timeLog(rate_text)
        rate_text.style.display = "none";
    }
}
const checkRating = (score) =>{
    catCounted+=1;
    cat_rating.innerHTML = "Cat Rated: " + catCounted;
   
    if(score == 1){
        warning.innerHTML= "1 IS CRAZYYYYYY"
    }
    else if(score == 2){
        warning.innerHTML= "2? DAMN"
    }
    else if(score <5){
        warning.innerHTML= "BRO COULD BE UGLIER"

    }
    else if(score<7){
        warning.innerHTML= "THIS CAR AIGHT"
    }
    else if(score <9){
        warning.innerHTML= "CAT LOWKEY A CUTIE"
    }
    else if (score== 9){
        warning.innerHTML = "CUTIE CAT"
    }
    else if(score == 10 && specialCat){
        warning.innerHTML = "ofc easter a 10 tf?"
    }
    else{
        warning.innerHTML= "EASTER GOT COMP"
    }
    buttonClick.style.backgroundColor = "#6E80B2";
    buttonClick.disabled = false;   
    rate_text.style.display = "none";
    
    

}


const buttonClick = document.querySelector(".button");
buttonClick.addEventListener("click", () => {
    // Call the API request function
    randomNum = Math.floor(Math.random()* 11)
    img = document.querySelector("#output-image-info");
    text = document.querySelector("#output-first");
    console.log(randomNum)
    if(randomNum < 1){
        
        specialCat = true
        text.innerHTML = "Easter";
        img.src = "easter.jpg";
        for(let i = 0;i<9;i++){
            rate_button[i].style.display = "none"
        }
        output_container.style.display = "block";
        
        checkCondition();
        
    }
    else{
        for(let i = 0;i<9;i++){
            rate_button[i].style.display = "inline-block"
        }
        specialCat = false
        getCatUrl(random_image).then((imageUrl) => {
            // Set the src attribute of the output image element
            
    
            text.innerHTML = imageUrl.breeds[0].name;
            img.src = imageUrl.url;
            output_container.style.display = "block";
            warning.innerHTML=""
            // var container = document.querySelector("#output-image");
            // container.appendChild(img)
            checkCondition();
              
    
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    
        
    
    
});


const rate_button = document.querySelectorAll(".rate")
for(let i = 0; i < rate_button.length; i++) {
    rate_button[i].addEventListener("click", 
    () => {
        checkRating(rate_button[i].value)
    }
    );
}

// document.getElementById("#output-image-info").src = "hi";
// document.getElementById("#output-image-info").src = "imageUrl";