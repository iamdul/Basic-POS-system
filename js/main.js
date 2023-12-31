/*const clearAndLoad=(element)=>{
    //clear,toggle
}*/

class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password
    }
}
class Customer{
    constructor() {
    }
}
let userArr=[];
let customerArr=[];
//User Management
const  createUser=()=>{
    let fullName=$('#full-name').val();
    let email=$('#register-email').val();
    let password=$('#register-password').val();

    //const hash=window.bcrypt.hashSync(password,window.bcrypt.genSaltSync());
    //console.log(hash)
    let createdUser=new User(fullName,email,password);
    let existUserData=userArr.find(e=>e.email);
    if(existUserData){
        alert('User is already exist!');
        return;
    }
    userArr.push(createdUser);
    console.log(userArr)
}

const login=()=>{
    let email=$('#email').val().toLowerCase();
    let password=$('#password').val();
    let existUserData=userArr.find(e=>e.email.toLowerCase()===email);
    if(existUserData){
        if(existUserData.password===password){
            console.log('yes')
        }else{
            alert('Password is wrong');
            return;
        }
    }else{
        alert('User email is not found');
    }
}

const createCustomer=()=>{

}
const findCustomer=(id)=>{

}
const updateCustomer=(id)=>{

}
const deleteCustomer=(id)=>{

}
const findAllCustomers=()=>{

}