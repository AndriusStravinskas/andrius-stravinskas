/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/

{
  class Automobilis {
    marke;
    modelis;
    kaina;

    constructor(marke, modelis, kaina, rida) {
    // savybės
    this.marke = marke;
    this.modelis = modelis;
    this.kaina = kaina;
    this.rida = rida;

    };

    increasePrice(amount) {
      return this.kaina += amount
    }
  };

  const car1 = new Automobilis('Audi', 'A6', 11000, 180000);
  const car2 = new Automobilis('BMW', 'X5', 12000, 100000);
  const car3 = new Automobilis('Volswagen', 'Passat', 6000, 280000);
  const allCars = [car1, car2, car3]

  console.log(car1);
  console.log(car2);
  console.log(car3);
  console.log(allCars);

  console.log(car1.modelis);
  console.log(car2.modelis);
  console.log(car3.modelis);

  console.log(car1.marke);
  console.log(car2.marke);
  console.log(car3.marke);

  console.log(car1.kaina);
  console.log(car2.kaina);
  console.log(car3.kaina);

  allCars.forEach((car) => car.increasePrice(100));
  console.table(allCars);



}