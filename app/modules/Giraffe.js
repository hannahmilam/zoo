class Giraffe {
  constructor(
    name = 'Gary',
    animal = 'Giraffe',
    color = 'black and yellow',
    favoriteFood = 'Acacia',
    img = "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_57960355.jpg?crop=0,231,4000,2500&wid=1640&hei=1025&scl=2.4390243902439024"
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

export default Giraffe