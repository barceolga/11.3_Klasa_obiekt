function Phone(name, brand, price, color, display, availability ) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.display = display;
  this.availability = availability;
}

Phone.prototype.printInfo = function() {
  console.log("This model's brand is " + this.brand + ", color is "+ this.color + ", the price is " + this.price + " and the display is " + this.display + ".");
}

Phone.prototype.printAvailability  = function() {
  if (this.availability !== "not available") {
    console.log("This model is currently " + this.availability + ".");
  } else {
    console.log(this.name + " is currently " + this.availability + "." + "\n" + "Check out our offer for other models from this brand!")
  }
}

var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", "Samsung", 550, "black", "5.4 inches", "available on demand");
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.printAvailability();


var IPhone6S = new Phone("IPhone 6S", "Apple", 2200, "orange", "4.5 inches", "available on store");
IPhone6S.printInfo();
IPhone6S.printAvailability();

var OnePlusOne = new Phone("One Plus One", "One Plus", 1700, "white", "6.6 inches", "not available");
OnePlusOne.printInfo();
OnePlusOne.printAvailability();

var Nokia8110 = new Phone("Nokia 8110 4G", "Nokia", 660, "navy", "2,4 inches", "not available");
Nokia8110.printInfo();
Nokia8110.printAvailability();
