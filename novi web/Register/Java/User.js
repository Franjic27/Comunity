class User {
    user_id = '' ;
    username = '';
    email = '';
    password = '';
    api_url ='https://6422fdfc77e7062b3e2836b6.mockapi.io';


 create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password,

        }
       
data = JSON.stringify(data);

        fetch(this.api_url + '/User' , {
            method: 'POST' , 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: data
        })
.then(response => response.json())
.then(data => {
  let session = new Session();
session.user_id = data.id;
session.startSession();


    window.location.href = 'platforma.html';

           })
        }




login() {
    fetch(this.api_url + '/users')
    .then(response => response.json())
    .then(data => {
 

        data.forEach(db_user => {
            if(db_user.email === this.email && db_user.password === this.password) {
                console.log('ulogovan si')
            }
        });
       });
   }
}



