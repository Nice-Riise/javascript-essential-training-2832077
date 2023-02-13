/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Computer from "./Computers.js";

const EveryDayBackpack = new Backpack(
  "Every Day Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const ComputerMarta = new Computer(
  "MartaPC",
  "gold",
  13,
  8,
  256,
  1.8,
  10,
  12,
  false
);

const ComputerJonas = new Computer(
  "jonasPC",
  "spaceGray",
  14.2,
  32,
  512,
  3.4,
  20,
  20,
  true
);

const ComputerOliver = new Computer(
  "OliverPc",
  "silver",
  12.2,
  4,
  128,
  1.1,
  5,
  5,
  false
);

const ComputerExtra = new Computer(
  "ExtraPc",
  "black",
  13,
  4,
  100,
  1,
  5,
  5,
  false
);

console.log(EveryDayBackpack);
console.log(ComputerMarta);
console.log(ComputerJonas);
console.log(ComputerOliver);
console.log(ComputerExtra);
