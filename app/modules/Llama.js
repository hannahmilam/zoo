class Llama {
  constructor(
  name = "Lisa",
  animal = 'Llama',
  color = "brown", 
  favoriteFood = "grass",
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GD7KaABT_4AuRZ1VcWmIMRIpwb6wxOtfRQ&usqp=CAU"
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
export default Llama