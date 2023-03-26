(function (){
    class Marker {
        constructor(color, inkLevel) {
            this.color = color;
            this.inkLevel = inkLevel;
        }

        print(text) {
            let printedText = "";
            for (let i = 0; i < text.length; i++) {
                if (text[i] !== " " && this.inkLevel > 0) {
                    printedText += text[i];
                    this.inkLevel -= 0.5;
                } else if (text[i] === " ") {
                    printedText += " ";
                }
            }
            console.log("%c" + printedText, `color: ${this.color}`);
        }
    }
    class RefillableMarker extends Marker {
        constructor(color, inkLevel, capacity) {
            super(color, inkLevel);
            this.capacity = capacity;
        }

        refill() {
            this.inkLevel = this.capacity;
        }
    }
    const simpleMarker = new Marker("blue", 30);
    simpleMarker.print("Hello world!");
    const refillableMarker = new RefillableMarker("red", 50, 100);
    refillableMarker.print("The quick brown fox jumps over the lazy dog");
    refillableMarker.refill();
    refillableMarker.print("The quick brown fox jumps over the lazy dog");
})()