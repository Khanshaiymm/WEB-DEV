
class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some sound"

    def info(self):
        return f"{self.name} is {self.age} years old and {self.color}"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof"  

    def fetch(self):
        return f"{self.name} is fetching the ball!"


class Cat(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        self.lives = lives

    def speak(self):
        return "Meow" 

    def sleep(self):
        return f"{self.name} is sleeping..."