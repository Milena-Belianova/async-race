import { Car, createCar } from '../components/api';

const carBrands: Array<string> = [
  'Toyota',
  'Volkswagen',
  'Daimler',
  'Ford Motor',
  'Honda',
  'General Motors',
  'BMW',
  'SAIC',
  'FAW Group',
  'Hyundai',
  'Dongfeng',
  'Nissan',
  'BAIC Group',
  'GAC Group',
  'Kia',
  'Renault',
  'Geely',
  'Volvo',
  'Tata',
  'Tesla',
  'Suzuki',
  'Mazda',
  'Subaru',
  'Toyota',
  'Volkswagen',
  'Daimler',
  'Ford Motor',
  'Honda',
  'Michelin',
  'Bridgestone',
  'Continental',
  'Goodyear',
  'Sumitomo',
];

const carModels: Array<string> = [
  'Elantra',
  'Mazda3',
  'Civic',
  'Forte',
  'Insight',
  'Elantra',
  'Corolla',
  'Accent',
  'Versa',
  'Cooper',
  'Jetta',
  'Prius',
  'Impreza',
  'Corolla',
  'Prius',
  'Sentra',
  'Leaf',
  'Electric',
  'Integra',
  'Spark',
  'Ioniq',
  'Veloster',
  'Rio',
  'Cooper',
  'Mirage',
  'WRX',
  'GTI',
];

export const generateCars = (amount = 10): Array<Promise<Car>> => {
  const resArray: Array<Promise<Car>> = [];
  for (let i = 0; i < amount; i += 1) {
    const carName = `${carBrands[Math.floor(Math.random() * carBrands.length)]} ${carModels[Math.floor(Math.random() * carModels.length)]}`;

    const carColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    resArray.push(createCar({ name: carName, color: carColor }));
  }
  return resArray;
};
