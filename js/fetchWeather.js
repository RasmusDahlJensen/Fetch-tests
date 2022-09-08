



fetch() /**Endpoint API */
.then()/**Response returner */
.then() /**push data ind i et array */
.catch() /**error handling */
.finally() /**Hvis alt lykkedes så gør noget */







fetch()
.then((response) => { 
    return response.json
})
.then((data) =>{
    arr1.push(data.items)
})
.catch((error) =>{
    console.error(error);
})
.finally(() =>{

})