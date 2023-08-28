fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => displayName(json))

function displayName(users){

    const userNames = users.map( user => user.username );
    const ul = document.getElementById("UserContainer");

    for( let i = 0; i < userNames.length; i++ ){
        let user = userNames[i];
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild(li);
    }

}