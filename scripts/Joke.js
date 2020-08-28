// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (jokeObj) => {
    if(Array.isArray(jokeObj)){
    return `<div class="joke-setup2">${jokeObj[0].setup}</div>
    <button class="request-joke-punchline">Show Punchline</button>
    `
    }
}

export const Punchline = (jokeObj) => {
    if(Array.isArray(jokeObj)) {
    return `<div class="joke-punchline2"> ${jokeObj[0].punchline}<div>
    `}
}

