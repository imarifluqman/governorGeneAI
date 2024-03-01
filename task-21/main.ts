type Car = {
  brand: string;
  model: string;
  year: number;
  color: string;
};

let arr: Car[] = [];

function createObj(car: Car) {
  arr.push(car);
}

createObj({
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver",
});

createObj({
  brand: "Honda",
  model: "Civic",
  year: 2023,
  color: "Blue",
});

createObj({
  brand: "Ford",
  model: "Mustang",
  year: 2021,
  color: "Red",
});

console.log(arr);
