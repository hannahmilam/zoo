class Monkey{
  constructor(
name = "Mary",
animal = 'Monkey',
color = 'brown',
favoriteFood = 'bugs',
img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPkylpG1YNJ6nkikba9QtNVK122whZb6Aow&usqp=CAU'
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
export default Monkey
