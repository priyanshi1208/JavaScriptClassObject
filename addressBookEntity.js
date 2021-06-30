class addressBook{
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
        this.firstName=firstName;
    }
    get firstName(){
        return this.firstName;
    }
    set lastName(lastName){
        this.lastName=lastName;
    }
    get lastName(){
        return this.lastName;
    }
    set address(address){
        this.address=address;
    }
    get address(){
        return this.address;
    }
    set city(city){
        this.city=city;
    }
    get city(){
        return this.city;
    }
    set state(state){
        this.state=state;
    }
    get state(){
        return this.state;
    }
    set zip(zip){
        this.zip=zip;
    }
    get zip(){
        return this.zip;
    }
    set phoneNumber(phoneNumber){
        this.phoneNumber=phoneNumber;
    }
    get phoneNumber(){
        return this.phoneNumber;
    }
    set email(email){
        this.email=email;
    }
    get email(){
        return this.email;
    }
}