class Person {
    constructor(_age,_name,_gender){
        this.age=_age;
        this._name=_name;
        this.gender=_gender;
    }
     getDOB=()=>{
        return new Date();

    }
}

class Person2
{
    constructor(_role){
        this.role=_role;
    }
    getDOB=()=>{
        return new Date();

    }

}




export default Person;