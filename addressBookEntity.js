class Person{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    set firstName(firstName){
        let firstNameRegex=RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(firstNameRegex.test(firstName));
            this.firstName=firstName;
    }
    get firstName(){
        return this.firstName;
    }
    set lastName(lastName){
        let lastNameRegex=RegExp("^[A-Z]{1}[a-z]{3,}");
        if(lastNameRegex.test(lastName));
            this.lastName=lastName;
    }
    get lastName(){
        return this.lastName;
    }
    set address(address){
        let addressRegex=RegExp("^[a-z]{4,}");
        if(addressRegex.test(address));
            this.address=address;
    }
    get address(){
        return this.address;
    }
    set city(city){
        let cityRegex=RegExp("^[a-z]{4,}");
        if(cityRegex.test(city));
            this.city=city;
    }
    get city(){
        return this.city;
    }
    set state(state){
        let stateRegex=RegExp("^[a-z]{4,}");
        if(stateRegex.test(state));
            this.state=state;
    }
    get state(){
        return this.state;
    }
    set zip(zip){
        let zipRegex=RegExp("^\d{5}(?:[-\s]\d{4})?$");
        if(zipRegex.test(zip));
            this.zip=zip;
    }
    get zip(){
        return this.zip;
    }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex=RegExp("^\s(?:\+?(\d{1,3}))?[-.(]*(\d{3})[-.)]*(\d{3})[-.]*(\d{4})(?:*x(\d+))?\s*");
        if(phoneNumberRegex.test(phoneNumber));
            this.phoneNumber=phoneNumber;
    }
    get phoneNumber(){
        return this.phoneNumber;
    }
    set email(email){
        let emailRegex=RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if(emailRegex.test(email));
            this.email=email;
    }
    get email(){
        return this.email;
    }
}
class AddressBook{
    addressbookArray=[];
    addContact(person){
        this.addressbookArray.push(person);
    }
    showContact(){
        this.addressbookArray.forEach(person=>{
            console.log(person.firstName,person.lastName,person.address,person.city,person.state,person.zip,person.phoneNumber,person.email);
        })
    }
    editContact(firstName,editedDetail){
        this.addressbookArray.forEach(person=>{
            if(person.firstName===firstName){
                person.firstName=editedDetail;
            }
        })
    }
    deleteContact(firstName){
        this.addressbookArray.forEach(person=>{
            if(person.firstName===firstName){
                this.addressbookArray.pop(person);
            }
        })
    }
    countPerson(cityState){
        return this.addressbookArray.reduce((counter,person)=>{
            if(person.city===cityState||person.state===cityState)counter+=1;
            return counter;
        },0);
    }
    searchByCityState(cityState){
        this.addressbookArray.filter(person=>{
            if(person.city===cityState||person.state===cityState)
                console.log(person.firstName,person.lastName,person.address,person.city,person.state,person.zip,person.phoneNumber,person.email);
        });
    }
    sortByName(){
        this.addressbookArray.sort((a,b)=>{
            return a.firstName.localeCompare(b.firstName);
        })
    }

}
let addressbook=new AddressBook();
var person1=new Person("priyanshi","shukla","987hvhj","kanpur","uttarPradesh","208021","8929373728","pri.shukla22082");
var person2=new Person("ayush","shukla","987hvhj","kanpur","uttarPrades","208021","8929373728","pri.shukla22082");
var person3=new Person("piyush","shukla","987hvhj","kanpur","uttarPrades","208021","8929373728","pri.shukla22082");
addressbook.addContact(person1);
addressbook.addContact(person2);
addressbook.addContact(person3);
console.log(addressbook.countPerson("uttarPradesh"));


