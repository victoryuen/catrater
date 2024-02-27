let toggle = false; 
let rating = 0;
const warning = document.querySelector("#warning")
const color_change = document.querySelector(".button");
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
        console.log(imageData);
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
        for(let i = 0; i < 11; i++) {
            rate_button[i].disabled = false;
        }
        warning.innerHTML=""
    }
    else{
        buttonClick.disabled = false;
    }
}
const checkRating = (score) =>{
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
    else{
        warning.innerHTML= "EASTER GOT COMP"
    }
    buttonClick.style.backgroundColor = "#6E80B2";
    buttonClick.disabled = false;   
    for(let i = 0; i < 11; i++) {
        rate_button[i].disabled = true;
    }
    
    

}

const buttonClick = document.querySelector(".button");
buttonClick.addEventListener("click", () => {
    // Call the API request function
    getCatUrl(random_image).then((imageUrl) => {
        // Set the src attribute of the output image element
        img = document.querySelector("#output-image-info");
        text = document.querySelector("#output-first");

        text.innerHTML = imageUrl.breeds[0].name;
        console.log(imageUrl.breeds[0]);
        img.src = imageUrl.url;
        output_container.style.display = "block";
        warning.innerHTML=""
        // var container = document.querySelector("#output-image");
        // container.appendChild(img)
        checkCondition();
          

    }).catch((error) => {
        console.error('Error:', error);
    });
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