
const link = 'https://swapi.dev/api/people/2/'

var data = []

var person = document.getElementById("name")
var gender = document.getElementById("gender")
var eyeColor = document.getElementById("eyes")


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("https://swapi.dev/api/people/1/", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result.name)
        person.innerHTML =result.name
        gender.innerHTML =result.gender
        eyeColor.innerHTML =result["eye_color"]
    })
    .catch(error => console.log('error', error));

