/*var messgae="hello naren" console.log(messgae);
var age = 22;   //integer
var per = 65.7;  //float
console.log(age);
console.log(per);*/


//String 
/*var nam = "naren";
var position = 'softwares developer';
console.log(nam);
console.log(position);*/

//boolean 
 /*var yes = true;
 var no = false;
 console.log(yes);
 console.log(no);*/

 //undefined 
/*var war;
console.log(war);*/

/*var age = 23;
console.log(typeof age);
var name  = "Welcome to browser";
console.log(typeof name)*/

//if statement  

/*var age=45;
var age1=54;
if(age>age1)
{
    console.log(true);
}else{
    console.log(false);
}*/

//pop-window 
// var name = prompt('what is your name?')
// alert('hello,'+name+'!')

// var response = confirm("I have successs");
// alert(response);


// var age = prompt('what is your age');
// if(age<18)
// {
//       var permission = confirm('I have my parent permissinon');
// if(permission)
// {
//     alert('you allowed roller coaster');
// }
// else
// {
//     alert('not allowed roller coaster');
// }
// }
// else
// {
//     alert('your allowed roller coaster');
// }

// var user =  new Object();
// console.log(user);

class Formvalidation
{
     
    FormValues = 
    {
        username:"",
        email:"",
        phonenumber:"",
        password:"",
        confirmpassword:""
    }
    errorValues = 
    {
        usernameErr:"",
        emaileErr:"",
        phonenumberErr:"", 
        passwordErr:"",
        confirmpasswordErr:""

    }
    ShowErrorMsg(index,msg)
    {
       const form_group = document.getElementsByClassName('form-group')[index];
       form_group.classList.add('error');
       form_group.getElementsByTagName('span')[0].textContent = msg;
    }
    showSuccessMsg(index)
    {
        const form_group = document.getElementsByClassName('form-group')[index];
        form_group.classList.remove('error');
        form_group.classList.add('success');
        
    }
    getInputs(){
        this.FormValues.username = document.getElementById('username').value.trim();
        this.FormValues.email = document.getElementById('email').value.trim();
        this.FormValues.phonenumber = document.getElementById('phonenumber').value.trim();
        this.FormValues.password = document.getElementById('password').value.trim();
        this.FormValues.confirmpassword = document,this.getElementById('confirmpassword').value.trim();

    }
    validateUsername()
    {
 
         if(this.FormValues.username === "")
         {
             this.errorValues.usernameErr = "* Please Enter your name";
             this.ShowErrorMsg(0,this.errorValues.usernameErr);
         }else if(this.FormValues.username.length<=4)
         {
             this.errorValues.usernameErr = "* Username must be atleast 5 characters";
             this.ShowErrorMsg(0,this.errorValues.usernameErr);
         }else if(this.FormValues.username.length>14)
         {
             this.errorValues.usernameErr = "* Username should not exceeds 14 characters";
             this.ShowErrorMsg(0,this.errorValues.usernameErr);
         }else 
         {
             this.errorValues.usernameErr = "";
             this.showSuccessMsg(0);
         }
    }
    validateEmail()
    {
         
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.FormValues.email === "")
        {
            this.errorValues.emaileErr = "* Please Enter valid Email";
            this.ShowErrorMsg(1,this.errorValues.emaileErr);
        }else if(!(regExp.test(this.FormValues.email)))
        {
            this.errorValues.emaileErr = "* Invalid Email";
            this.ShowErrorMsg(1,this.errorValues.emaileErr);
        }else
        {
            this.errorValues.emaileErr = "";            
            this.ShowErrorMsg(1);
        }
    }
    validatePhonenumber()
    {

    }
    validatePassword()
    {

    }
    validateConfirmpassword()
    {

    }
    alertMessage()
    {

    }
    removeInputs()
    {

    }
}

const ValidateUserInputs = new Formvalidation();
document.getElementsByClassName('form')[0].addEventListener('submit',()=>
{
      ValidateUserInputs.getInputs();
      ValidateUserInputs.validateUsername();
}); 