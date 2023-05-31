const title = document.getElementById('title')
const frame = document.getElementById('frame')
const firstName = document.getElementById("firstname")
const lastName = document.getElementById('lastname')
const phone = document.getElementById('phone')
const address = document.getElementById('street')
const country = document.getElementById('country')

let url = 'https://randomuser.me/api/'

const getProfile = () => {
    fetch(url).then(response => response.json())
    .then(data =>{
        const user = data.results[0];
        title.value = data.result.name.title,
        firstName.Value = data.result.name.firstName
        lastName.value = data.result.name.lastName
        phone.value = data.result.name.phone
        address.value = 
        country.value = 
    })
}

getProfile()

