from models import Dog, Cat, Animal

def main():
    my_dog = Dog("Rex", 5, "German Shepherd")
    my_cat = Cat("Whiskers", 3, "Orange")
    generic_animal = Animal("Unknown", 1, "Alien")

    animals = [my_dog, my_cat, generic_animal]

    print("--- Animal Demonstration ---")
    for animal in animals:
        print(animal)

        print(f"Sound: {animal.speak()}")

        print(animal.eat())
        print("-" * 20)

if __name__ == "__main__":
    main()