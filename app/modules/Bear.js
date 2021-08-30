class Bear {
  constructor(
      name = 'Blue',
      animal = 'Bear',
      color = 'black',
      favoriteFood = 'berries',
      img = "https://static.onecms.io/wp-content/uploads/sites/20/2021/07/23/grizzly-bear-1.jpg"

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

export default Bear;