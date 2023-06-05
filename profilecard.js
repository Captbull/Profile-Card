const title = document.getElementById('title')
const frame = document.getElementById('frame')
const firstName = document.getElementById("firstname")
const lastName = document.getElementById('lastname')
const phone = document.getElementById('phone')
const address = document.getElementById('street')
const country = document.getElementById('country')
const email = document.getElementById('email')

let url = 'https://randomuser.me/api/'

const getProfile = () => {
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data);
        title.value = data.results[0].name.title;
        firstName.value = data.results[0].name.first;
        lastName.value = data.results[0].name.last;
        phone.value = data.results[0].phone;
        email.value = data.results[0].email;
        address.value = data.results[0].location.street.name;
        country.value = data.results[0].location.coordinates.country;
    })
}

getProfile()
