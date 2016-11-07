/**
 * Created by MOmoDi on 1.11.2016 г..
 */

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    toString(){
        let name = this.constructor.name;
         return name+`${this.email}`;
    }
}
let p = new Person("Momo", 'mo@gmail.bg');

console.log(`person: ${p.name} ${p.email}`);

class Teacher extends Person{
    constructor(name, email, subject){
        super(name,email);
        this.subject = subject;
    }
    toString(){
        let baseName = super.toString().slice(0, -1);
        return baseName+`${subject}`;
    }

}
let t = new Teacher("Ogo", "sama", "niki");
console.log(`Teacher: ${t.name} ${t.email} teaches ${t.subject}`);