class User {
    name;
    surname;
    books;
    pets;

    constructor(name, surname, books, pets) {
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    addPet(pet) {
        this.pets.push(pet);
        return this.pets;
    }

    countPets() {
        return this.pets.length;
    }

    addBook(name, author) {
        let book = { name, author };
        this.books.push(book);
        return this.books;
    }

    getBooksNames() {
        return this.books.map(book => book.name);
    }
}

const user = new User(
    "Ramiro",
    "Guillen",
    [
        {
            name: "1984",
            author: "George Orwell"
        },
        {
            name: "Brave New World",
            author: "Aldous Huxley"
        }
    ],
    ["Cat", "Dog"]
);

console.log(user.getFullName());
console.log(user.addPet("Dog"));
console.log(user.countPets());
console.log(user.addBook("Farenheit 451", "Ray Bradbury"));
console.log(user.getBooksNames());