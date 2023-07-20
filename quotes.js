const LoadPost = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => DisplayPost(data))
}

const DisplayPost = quote => {
    const BlockQoute = document.getElementById('quote');

    console.log(quote);
    BlockQoute.innerText = quote.quote;


}