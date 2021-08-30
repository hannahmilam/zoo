class Iguana {
  constructor(
      name = 'Iggy',
      animal = 'Iguana',
      color = 'green',
      favoriteFood = 'flies',
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELo26imy0oe9PD0KusoHAjdxNskTKXtBOJg&usqp=CAU"
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

export default Iguana