class Alligator {
    constructor(
        name = 'Ally',
        animal = 'Alligator',
        color = 'green',
        favoriteFood = 'fish',
        img = "https://www.galvestontx.gov/ImageRepository/Document?documentID=12168"
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

export default Alligator;