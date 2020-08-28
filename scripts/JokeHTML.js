import {Joke, Punchline} from "./Joke.js"

export const JokeSetup = (jokeData) => {
    const jokeElement = document.querySelector(".joke-setup")
    let HTMLRep = Joke(jokeData);
    console.log(HTMLRep)
    jokeElement.innerHTML = `
      ${HTMLRep}
    `
}


export const JokePunchline = (jokeData) => {
    const jokeElementPunch = document.querySelector(".joke-punchline")
    let HTMLRepPunch = Punchline(jokeData);
    console.log(HTMLRepPunch);
    jokeElementPunch.innerHTML = `
      ${HTMLRepPunch}
      `
}