const response = require('express')

fetch('http://localhost:3000/api/student', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: 'Adam',
        email: 'adam@gmail.com',
        phone: '08888003915'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))