fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => displayTitle(json))

function displayTitle(title){
    const userTitle = title.map( user => user.title );
    const userTitleContainer = document.getElementById("userTitleContainer");

    for (let i = 0; i < userTitle.length; i++) {
        const element = userTitle[i];
        const li = document.createElement("li");
        li.innerText = element;
        userTitleContainer.appendChild(li);
    }
}