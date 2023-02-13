/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const MyComputer = {
  brand: "Apple",
  cpu: "M1",
  screenSize: 14,
  hddSpace: 512,
  keybordLayout: {
    leftSide: "F12",
    rightSide: "F1",
  },

  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

const MyPhone = {
  brand: "iphone",
  type: "13mini",
  storageType: "flash",
  storageSize: 256,
  conections: {
    wireles: ["wifi", "bt", "rfid", "5g"],
    wired: "lightningPort",
  },
  batteryPrcentage: 87,
  batteryStatus: "normal",
};

console.log("My computer:", MyComputer);
console.log("My Phone specs:", MyPhone);
