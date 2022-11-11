import Person from "./personModule.mjs";




// class Vehicle {
//     constructor(wheels,speed,time){
//         this.wheels=wheels;
//         this.speed=speed;
//         this.usedTime=time;

//     }
//     getDistance(){
//         this.distanceTravelled=this.speed*this.usedTime
//     }
    
//     set setModel(arg){
//         this.model=arg;
//     }
    
//     get getModel(){
//         return this.model;
//     }

//     static validateObj(arg){
//         const keys=Object.keys(arg);
//         let isValid =keys.map(e=>e=="wheels"||e==="speed"||e=="usedTime"||e=="distanceTravelled"||e=="model")
//          let temp =isValid.filter(e=>e==false)[0];
//         return temp==undefined ? true:false;
//     }
// }

// const bike =new Vehicle(2,20,200);
// bike.getDistance();
// console.log(bike.distanceTravelled)

// console.log(bike.getModel)
// bike.setModel="bullet";
// console.log(bike.getModel)

// const isValid=Vehicle.validateObj(bike);
// console.log(isValid);


// function constructor1(){

//     this.name="test";
//     this.type="test"

// }

// const obj=constructor1();
// console.log(obj)


// class Person {
//     constructor(_age,_name,_gender){
//         this.age=_age;
//         this._name=_name;
//         this.gender=_gender;
//     }
//      getDOB=()=>{
//         return new Date();

//     }
// }



class Student extends Person{
    constructor(_age,_name,_gender,_school,_standard){
       
        super (_age,_name,_gender);
        
        this.gender=_gender;
        this.school=_school;

        this.standard=_standard;
    }
    getDOB=()=>{
        return new Date("wed Nov 02 2022");
}
}

const student=new Student(10,"joe","m","front end","cs");
const person=new Person(10,"abcd","gh");

console.log(student)