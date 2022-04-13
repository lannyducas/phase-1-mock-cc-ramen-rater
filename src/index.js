// write your code here
const url = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');

async function getRamen() {
    let response = await fetch(url)
    let json = await response.json();
    return json;
    
}

function displayImages(imgs){
    imgs.forEach(el => {
        let newImg = document.createElement('img');
        newImg.addEventListener('click', (e) => {
            console.log('display me')
        })
        newImg.src = el;
        ramenMenu.append(newImg);
    })
}

document.addEventListener('DOMContentLoaded', (e) => {
    getRamen().then(data => {
        let imgs = []
        ramen = data
        console.log(ramen)
        data.forEach((el, i) => {
            imgs.push(el.image)
        })
        console.log(imgs);
        displayImages(imgs)
    })

})


