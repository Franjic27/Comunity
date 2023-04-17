
let session = new Session();
session = session.getSession();

if(session !== "") {
    window.location.href ='platforma.html';
}  



let config = {
    'Fullname' : {
        required: true ,
        minlength: 5,
        mxlength:25
    },

    'emaill' : {
        required: true ,
        email: true ,
        minlength: 5,
        mxlength:25
    },

    'passwordd': {
        required:true,
        minlength:7,
        maxlength:15,
        matching:'confpasss'
    },
    'confpasss' : {
        required:true,
        minlength:7,
        maxlength:15,
        matching:'passwordd'
    }

    
}

let validator = new Validator (config, '#registrartion');

document.querySelector('#registrartion').addEventListener('submit' ,e => {
    e.preventDefault();


    if(validator.validationPassed()) {
 

        let user = new User();
        user.username = document.querySelector('#username').value;
        user.email = document.querySelector('#email').value;
        user.password = document.querySelector('#password').value;
        user.create();



    } else {
        alert('nije ok');
    }
});



