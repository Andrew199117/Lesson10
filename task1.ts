// Написать класс Square, Rectangle и Triangle

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  constructor(protected readonly type: string) {}

  getType(): string {
    return this.type;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;

  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  constructor(private readonly side: number) {
    super(FigureType.Square);

    if (side <= 0) {
      throw new Error("side must be greater than 0");
    }
  }

  getArea(): number {
    return this.side * this.side;
  }

  getPerimeter(): number {
    return this.side * 4;
  }

  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    super(FigureType.Rectangle);

    if (width <= 0) {
      throw new Error("width must be greater than 0");
    }

    if (height <= 0) {
      throw new Error("height must be greater than 0");
    }
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return (this.width + this.height) * 2;
  }

  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

// Класс Triangle (треугольник)
class Triangle extends Figure {
  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    super(FigureType.Triangle);

    if (side1 <= 0) {
      throw new Error("side1 must be greater than 0");
    }

    if (side2 <= 0) {
      throw new Error("side2 must be greater than 0");
    }

    if (side3 <= 0) {
      throw new Error("side3 must be greater than 0");
    }
  }

  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  getArea(): number {
    const p = this.getPerimeter() / 2;

    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
  }

  getDescription(): string {
    return `Triangle with side1 ${this.side1}, side2 ${this.side2} and side3 ${this.side3}`;
  }
}

// Пример использования
const square = new Square(5);

console.log(square.getArea());
console.log(square.getPerimeter());
console.log(square.getType());
console.log(square.getDescription());

console.log("-----------");

const rectangle = new Rectangle(4, 6);

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.getType());
console.log(rectangle.getDescription());

console.log("-----------");

const triangle = new Triangle(3, 4, 5);

console.log(triangle.getArea());
console.log(triangle.getPerimeter());
console.log(triangle.getType());
console.log(triangle.getDescription());
