// write your code here
const url = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');
const imgDisplay = document.getElementsByClassName("detail-image");
const ramenName = document.getElementsByClassName("name");
const ramenRestaurant = document.getElementsByClassName("restaurant");

async function getRamen() {
    let response = await fetch(url) //fetch api data
    let json = await response.json(); //convert api data to json
    return json; //return json data
    
}

function displayImages(imgs){ //invokes on page load
    imgs.forEach(el => { //iterates through each image in object
        let newImg = document.createElement('img');
        newImg.addEventListener('click', (e) => {
           // console.log('display me')
            console.log(e.target);
            imgDisplay.src = el.image;
            console.log(imgDisplay) //value is not updating properly, still detail-image
            ramenName.innerHTML = el.name;
            ramenRestaurant.innerHTML = el.restaurant;
            console.log(ramenName, ramenRestaurant);
        })
        newImg.src = el; //<img> source set to element
        ramenMenu.append(newImg);

    })
}
const newName = document.getElementById('new-name');
const newRestaurant = document.getElementById('new-restaurant');
const newImage = document.getElementById('new-image');
const newRating = document.getElementById('new-rating');
const newComment = document.getElementById('new-comment');

newRamenNode = document.createElement('div');


function submitNewRamen(e){
    e.preventDefault(); //this is fucking me up but I feel like it should work
    //I think the problem is something with my function's parameters, e being the same as e from line 52
    
    document.getElementsByClassName("detail-image").src = newImage.value;
    document.getElementsByClassName("name").innerHTML = newName.value;
    document.getElementsByClassName("restaurant").innerHTML = newRestaurant.value;
    //need to create a new element under rating and comment headers and append newRating.value and newComment.value
    ramenMenu.append(newImage.src);
}

document.addEventListener('DOMContentLoaded', (e) => {
    getRamen().then(data => { //fetches all of the ramen images
        let imgs = [] //creates object to store images
        ramen = data
        //console.log(ramen) //logs ramen object
        data.forEach((el, i) => { //iterates through each element in object, i = index but idk what its doing 
            imgs.push(el.image) //adds each individual image to imgs array

        })
        //console.log(imgs); //console logs the imgs object
        displayImages(imgs)  //
    })
    document.getElementById('new-ramen').addEventListener("submit", submitNewRamen());
})

// first core deliverable is working, images are displayed in the menu div
// 

