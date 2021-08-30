import Alligator from "../modules/Alligator.js"
import Bear from "../modules/Bear.js"
import Camel from "../modules/Camel.js"
import Donkey from "../modules/Donkey.js"
import Falcon from "../modules/Falcon.js"
import Giraffe from "../modules/Giraffe.js"
import Horse from "../modules/Horse.js"
import Iguana from "../modules/Iguana.js"
import Jaguar from "../modules/Jaguar.js"
import Kangaroo from "../modules/Kangaroo.js"
import Llama from "../modules/Llama.js"
import Monkey from "../modules/Monkey.js"


let ally = new Alligator ()
let blue = new Bear ()
let cami = new Camel ()
let eeyore = new Donkey ()
let ferris = new Falcon ()
let gary = new Giraffe ()
let hailey = new Horse ()
let iggy = new Iguana ()
let jerry = new Jaguar ()
let kelly = new Kangaroo ()
let lisa = new Llama ()
let mary = new Monkey ()

let zoo = [ally, blue, cami, eeyore, ferris, gary, hailey, iggy, jerry, kelly, lisa, mary]

function drawAnimals(){
let template = ""
zoo.forEach(a => template+= /*HTML*/ `
  <div class="col-3 p-3 text-center text-light">
  <img title="${a.name} the ${a.animal}'s favorite food is ${a.favoriteFood}" src="${a.img}" class="animal-img" alt="${a.name}">
  <h3 class="text-center">${a.name}</h3>
  </div>
`)
document.getElementById('animals').innerHTML = template
}
export class ZooControllers{
  drawZoo(){
  console.log("button worked")
    drawAnimals()
  }
}