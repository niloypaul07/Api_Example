const LoadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => DisplayUser(data.results))
}

const DisplayUser = users => {
    const userContainer = document.getElementById('user-container');


    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
    <h3>User Name:${user.name.first} ${user.name.last}</h3>
    <p>User Location:${user.location.city}</p>
    <p>User Email:${user.email}</p>
    `

        userContainer.appendChild(userDiv);
    }

}
LoadUser();