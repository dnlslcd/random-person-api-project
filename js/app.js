// Tu código aquí

const profileGenerator = document.querySelector("#btn");
const userPic = document.querySelector("img");
const userName = document.querySelector("#first");
const userLastName = document.querySelector("#last");
const userCountry = document.querySelector("#country");
const userPhone = document.querySelector("#phone");
const userEmail = document.querySelector("#mail");

profileGenerator.addEventListener("click", async function(){
    const response = await fetch("https://randomuser.me/api/");
    console.log(response);

    const data = await response.json();
    console.log(data);

    userPic.src = data.results[0].picture.medium;
    userName.textContent = data.results[0].name.first;
    userLastName.textContent = data.results[0].name.last;
    userCountry.textContent = data.results[0].location.country;
    userPhone.textContent = data.results[0].phone;
    userEmail.textContent = data.results[0].email;




});