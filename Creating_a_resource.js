
document.getElementById("btn").addEventListener('click', function(){
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;
    const postDetails = {
        country: country,
        city: city,
        phone: phone,
    }
    postServer(postDetails)
})



function postServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postInfo),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}