class Jaguar {
  constructor(
    name = "Jerry",
    animal = 'Jaguar',
    color = 'orange',
    favoriteFood = 'monkeys',
    img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNizlLNhJoMkK6ArqeOSOXEm2YUMOkAQUQsA&usqp=CAU'
    
  ) {
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


export default Jaguar