import {useJoke, getJoke} from "./JokeProvider.js"
import {Joke, Punchline} from "./Joke.js"
import {JokeSetup, JokePunchline} from "./JokeHTML.js"



const jokeBtn = document.querySelector(".request-joke-btn");

let jokeData = {};

jokeBtn.addEventListener("click", (e) => {
  getJoke()
  .then((joke) => {
    jokeData = useJoke()
    JokeSetup(jokeData)

      const jokePunch = document.querySelector(".request-joke-punchline");
      jokePunch.addEventListener("click", (e) => {
        JokePunchline(jokeData)
      })
    })
  })