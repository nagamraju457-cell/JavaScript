// let colorcodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// const change = () => {
//     let display = document.getElementById("display");

//     let color = '#';

//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * 16);
//         color += colorcodes[random];
//     }

//     display.style.backgroundColor = color;
// }
const validateForm = (event) =>{
    event.preventDefault();
    let username = event.target.name
    let password = event.target.password
    if(username.value === "" && password.value === ""){
        error.innerHTML = "Username and Password are required";
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
    else if(username.value === ""){
        error.innerHTML = "Username is required";
        username.style.borderColor = "red"
    }
    else if(password.value === ""){
        error.innerHTML = "Password is required";
        password.style.borderColor = "red"
    }
   
}