class Vehicle {
  constructor(make, model, year, edition, energyConsumption) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.edition = edition;
    this.energyConsumption = energyConsumption;
  }
  //   drive() {
  //     console.log("Drive");
  //   }
}
const Porsche = new Vehicle("Porsche", "Cayenne", 2023, "Sport", "Electric");
console.log(Porsche);
