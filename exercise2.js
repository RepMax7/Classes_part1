class StationeryMarker {
    constructor(color, inkPercentage) {
      this.color = color;
      this.inkPercentage = inkPercentage;
    }
  
    printText(text) {
      if (this.inkPercentage <= 0) {
        console.log("The marker is out of ink.");
        return;
      }
  
      let nonWhitespaceChars = 0;
      for (let i = 0; i < text.length; i++) {
        if (!text[i].match(/\s/)) {
          nonWhitespaceChars++;
        }
      }
      let requiredInk = nonWhitespaceChars * 0.5;
  
      if (requiredInk > this.inkPercentage) {
        console.log("The marker does not have enough ink to print the text.");
        return;
      }
  
      this.inkPercentage -= requiredInk;
      console.log(`${this.color}: ${text}`);
    }
  }
  
  class RefillableMarker extends StationeryMarker {
    constructor(color, inkPercentage) {
      super(color, inkPercentage);
    }
  
    refill(refillPercentage) {
      if (refillPercentage < 0 || refillPercentage > 100) {
        console.log("Invalid refill percentage.");
        return;
      }
  
      this.inkPercentage += refillPercentage;
      if (this.inkPercentage > 100) {
        this.inkPercentage = 100;
      }
    }
  }
  
  
  const simpleMarker = new StationeryMarker("red", 50);
  simpleMarker.printText("Hello, world!");
  
  const refillableMarker = new RefillableMarker("blue", 25);
  refillableMarker.printText("Hello, again!");
  refillableMarker.refill(50);
  refillableMarker.printText("Hello, once more!");