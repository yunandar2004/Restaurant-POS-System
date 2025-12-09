export { default as Home } from "./Home.jsx";
export { default as Auth } from "./Auth.jsx";
export { default as Orders } from "./Orders.jsx";
export { default as Table } from "./Table.jsx";


import menu1 from '/menu1.jpg'
import menu2 from '/menu2.jpg'
import menu3 from '/menu3.jpg'
import menu4 from '/menu4.jpg'
import menu5 from '/menu5.jpg'

export const popularDishes = [
    {
        id: 1,
        title: 'Burger',
        image: menu1,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 2,
        title: 'fried Chicken',
        image: menu2,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 3,
        title: 'Burger',
        image: menu3,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 4,
        title: 'fried Chicken',
        image: menu4,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 5,
        title: 'Burger',
        image: menu5,
        price: 100,
        numbersOfOrder : 20,
    },
        {
        id: 6,
        title: 'Burger',
        image: menu1,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 7,
        title: 'fried Chicken',
        image: menu2,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 8,
        title: 'Burger',
        image: menu3,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 9,
        title: 'fried Chicken',
        image: menu4,
        price: 100,
        numbersOfOrder : 20,
    },
    {
        id: 10,
        title: 'Burger',
        image: menu5,
        price: 100,
        numbersOfOrder : 20,
    },

]

export const tables = [
  { id: 1,  status: "Booked", name: "Table 1",  initial: "T1",seats: 4 },
  { id: 2,  status: "Available",        name: "Table 2",  initial: "T2" ,seats: 4},
  { id: 3,  status: "Booked",     name: "Table 3",  initial: "T3",seats: 4 },
  { id: 4,  status: "Booked",  name: "Table 4",  initial: "T4",seats: 4 },
  { id: 5,  status: "Available",        name: "Table 5",  initial: "T5",seats: 4 },
  { id: 6,  status: "Booked",     name: "Table 6",  initial: "T6" ,seats: 4},
  { id: 7,  status: "Available",        name: "Table 7",  initial: "T7" ,seats: 4},
  { id: 8,  status: "Booked",  name: "Table 8",  initial: "T8",seats: 4 },
  { id: 9,  status: "Booked",     name: "Table 9",  initial: "T9",seats: 4 },
  { id: 10, status: "Available",        name: "Table 10", initial: "T10",seats: 4 },
  { id: 11, status: "Booked",  name: "Table 11", initial: "T11" ,seats: 4 },
  { id: 12, status: "Booked",     name: "Table 12", initial: "T12",seats: 4  },
  { id: 13, status: "Available",        name: "Table 13", initial: "T13",seats: 4 },
  { id: 14, status: "Booked",  name: "Table 14", initial: "T14",seats: 4 },
  { id: 15, status: "Booked",     name: "Table 15", initial: "T15",seats: 4 }
];
