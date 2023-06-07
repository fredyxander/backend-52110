const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const authButton = document.getElementById("authButton");

loginButton.addEventListener("click",async(e)=>{
    e.preventDefault();
    console.log("loginForm",loginForm);
    const response = await fetch("http://localhost:8080/login",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email:loginForm.email.value,
            password:loginForm.password.value,
        })
    });
    // console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    localStorage.setItem("token",data.accessToken);
});

// fetch(`http://localhost:8080/api/products/${productId}`)

authButton.addEventListener("click",async()=>{
    const response = await fetch("http://localhost:8080/privada",{
        method:"get",
        headers:{
            "Content-type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data = await response.json();
    console.log("data: ", data);
});