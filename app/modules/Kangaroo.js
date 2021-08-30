
class Kangaroo {
  constructor(
name = "Kelly",
animal = 'Kangaroo',
color = "tan",
favoriteFood = 'fish',
img = 'https://s.abcnews.com/images/International/kangaroo-stock-gty-jef-191003_hpMain_1x1_992.jpg'
  ){

  this.name = name;
  this.animal = animal;
  this.color = color;
  this.favoriteFood = favoriteFood;
  this.img = img;
}

eat(food) {
  console.log(`Chomp chomp all the ${food} dies.`)
}

}


export default Kangaroo