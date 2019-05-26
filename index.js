// Your code here

class Animal {
  constructor(name, sex) {
    this.name = name
    this.sex = sex
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says woof!`
  }

}

class Cat extends Animal {
  speak() {
    return `${this.name} says meow!`
  }
}

class Bird extends Animal {
  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
    return `${this.name} says squawk!`
    }
  }
}
