import {pinturas} from "./data/data.js";

console.log(pinturas)

const items = document.getElementById('item');
console.log(items)

const templatecard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

const LoadData = (pinturas) =>{

    pinturas.forEach(data => {  
        const {id,name,Image} = data
        templatecard.querySelector('h5').textcontent = name
        templatecard.querySelector('img').setAttribute('src',Image)
        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    
});
items.appendChild(fragment)

}

document.addEventListener('DOMContentLoaded',()=>{
    LoadData(pinturas)
})

