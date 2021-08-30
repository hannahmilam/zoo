class Falcon {
  constructor(
      name = 'Ferris',
      animal = 'Falcon',
      color = 'black',
      favoriteFood = 'mice',
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dUM3j0OQZmb0CJ5j9iNQ-9Zs_CMAvbEmCw&usqp=CAU"
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

export default Falcon;