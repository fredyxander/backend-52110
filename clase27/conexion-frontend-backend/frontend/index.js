const makeRequest = async()=>{
    const response = await fetch("http://localhost:8080/users",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        },
        // body:JSON.stringify(objJson)
    });
    const data = await response.json();
    console.log("data",data);
}