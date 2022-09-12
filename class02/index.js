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
        console.log(`${this.name} ${this.surname}`);
        return `${this.name} ${this.surname}`;
    }

    addPet(pet) {
        this.pets.push(pet);
        console.log(this.pets);
        return this.pets;
    }

    countPets() {
        console.log(this.pets.length);
        return this.pets.length;
    }

    addBook(name, author) {
        let book = { name, author };
        this.books.push(book);
        console.log(this.books);
        return this.books;
    }

    getBooksNames() {
        console.log(this.books.map(book => book.name));
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

user.getFullName();
user.addPet("Dog");
user.countPets();
user.addBook("Farenheit 451", "Ray Bradbury");
user.getBooksNames();