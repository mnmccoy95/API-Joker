let joke = [];

// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

export const useJoke = () => {
    let joke2 = joke;
    return joke2;
}

export const getProgrammingJoke = () => {
    return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(response => response.json())
    .then(
        parsedJoke => {
            console.log(parsedJoke)
            joke = parsedJoke;
        }
    )
}

export const getGeneralJoke = () => {
    return fetch("https://official-joke-api.appspot.com/jokes/general/random")
    .then(response => response.json())
    .then(
        parsedJoke => {
            console.log(parsedJoke)
            joke = parsedJoke;
        }
    )
}

export const getKnockJoke = () => {
    return fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random")
    .then(response => response.json())
    .then(
        parsedJoke => {
            console.log(parsedJoke)
            joke = parsedJoke;
        }
    )
}