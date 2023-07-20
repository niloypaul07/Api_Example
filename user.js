const LoadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayUser(data.results[0]))
        .catch(error => console.log(error))
}

const LoadAsyncUser = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        DisplayUser(data.results[0]);

    }
    catch (error) {

        console.log(error);
    }


}

const DisplayUser = user => {
    console.log(user);
}