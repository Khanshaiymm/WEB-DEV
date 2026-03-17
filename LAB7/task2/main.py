
from models import Dog, Cat
def main():
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Milo", 2, "white", 9)

    animals = [dog, cat]

    for animal in animals:
        print(animal)          
        print(animal.info())      
        print(animal.speak())     
        print()

    print(dog.fetch())
    print(cat.sleep())


if __name__ == "__main__":
    main()