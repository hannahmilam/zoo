class Camel {
  constructor(
      name = 'Cami',
      animal = 'Camel',
      color = 'tan',
      favoriteFood = 'wheat',
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxtGmVDUOr4Uqp4fPJtG-Yi-Oid9AHzUUUw&usqp=CAU"

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

export default Camel;