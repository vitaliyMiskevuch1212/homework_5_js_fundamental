(function (){
class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getLength(){
        return  2 * Math.PI * this.radius;
    }
    static getLengthByRadius(radius){
        return 2 * Math.PI * radius;
    }
    getObject(){
        return new Circle(this.x, this.y, this.radius)
    }
    static getObjectByParams(x, y, radius){
        return new Circle(x, y, radius)
    }
    isPointInside(x, y){
        return Math.sqrt(((x - this.x) ** 2 + (y - this.y) ** 2) < this.radius);
    }
    toString(){
        return `Circle: x = ${this.x}, y = ${this.y}, radius = ${this.radius}`
    }
}
    const circle1 = new Circle(0, 0, 5);
    console.log(circle1.getLength());
    console.log(Circle.getLengthByRadius(5));
    const circle2 = circle1.getObject();
    console.log(circle2.toString());
    const circle3 = Circle.getObjectByParams(10, 10, 3);
    console.log(circle3.isPointInside(10, 13));
    console.log(circle3.isPointInside(10, 15));
    console.log(circle1.toString());
})()