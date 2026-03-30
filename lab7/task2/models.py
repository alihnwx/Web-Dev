class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def eat(self):
        return f"{self.name} is eating."

    def speak(self):
        return "Generic animal sound"

    def __str__(self):
        return f"{self.species}: {self.name}, Age: {self.age}"

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "Woof! Woof!"

class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color
    def speak(self):
        return "Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching the sofa."