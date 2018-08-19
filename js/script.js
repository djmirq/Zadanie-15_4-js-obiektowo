
function Phone(brand, price, color, GSM, LTE) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.GSM = GSM;
  this.LTE = LTE;

  Phone.prototype.printInfo = function() {
    console.log(
      "The phone brand is " +
        this.brand +
        ", color is " +
        this.color +
        " and the price is " +
        this.price +
        " and the GSM is " +
        this.GSM +
        " and the LTE is " +
        this.LTE +
        "."
    );
  };

  Phone.prototype.printShortInfo = function() {
    console.log(
      "The phone brand is " +
        this.brand +
        " and the price is " +
        this.price +
        "."
    );
  };
}

var iPhone6S = new Phone("Apple", 2250, "silver", "850 900", true);
var SamsungS6 = new Phone("Samsung", 2350, "black", "850 900 1800 1900", true);
var OnePlus1 = new Phone("OnePlus", 1950, "pink", "850 900 1900 2100", false);

iPhone6S.printInfo();
SamsungS6.printInfo();
OnePlus1.printInfo();

iPhone6S.printShortInfo();
SamsungS6.printShortInfo();
OnePlus1.printShortInfo();