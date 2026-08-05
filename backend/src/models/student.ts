class Student{

    name?: string;
    age?: number;

    constructor(name: string, age: number){

        this.name = name;
        this.age = age;
    }

    displayDetails(): void{

        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    }
}

let s1 = new Student("Bharggav", 25);

s1.displayDetails();