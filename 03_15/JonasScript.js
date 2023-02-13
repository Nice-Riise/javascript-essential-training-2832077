import Books from "./JonasBooks.js";

const rubberTarzan = new Books(
  "Rubber Tarzan",
  "ChildFiction",
  154,
  68,
  123456789,
  1997,
  "reading"
);
console.log(rubberTarzan);

const HarryPotter = new Books(
  "Harry Potter",
  "Adventure Fiction sci-fi",
  299,
  299,
  987654321,
  2001,
  "finished"
);
console.log(HarryPotter);

const ThePowerOfNow = new Books(
  "The Power Of Now",
  "self improvement",
  450,
  0,
  1928273645,
  2015,
  "not started"
);
console.log(ThePowerOfNow);
