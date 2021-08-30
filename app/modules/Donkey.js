class Donkey {
  constructor(
      name = 'Eeyore',
      animal = 'Donkey',
      color = 'gray',
      favoriteFood = 'thistles',
      img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vK9YrKmSCWKmyxRD1yXZCnVwT4uJdMp_Ew&usqp=CAU'

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

export default Donkey;