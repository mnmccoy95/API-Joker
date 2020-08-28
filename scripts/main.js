import {useJoke, getProgrammingJoke, getKnockJoke, getGeneralJoke} from "./JokeProvider.js"
import {Joke, Punchline} from "./Joke.js"
import {JokeSetup, JokePunchline} from "./JokeHTML.js"

let jokeType = "";

// const jokeBtn = document.querySelector(".request-joke-btn");
const dropList = document.querySelector("#selType")

dropList.addEventListener('change', (event) => {
  
  jokeType = event.target.value
  console.log(jokeType)
  const jokeBtn = document.querySelector(".request-joke-btn");

  let jokeData = {};

  jokeBtn.addEventListener("click", (e) => {
    if(jokeType === "knock-knock"){
        getKnockJoke()
        .then((joke) => {
          jokeData = useJoke()
          JokeSetup(jokeData)
      
            const jokePunch = document.querySelector(".request-joke-punchline");
            jokePunch.addEventListener("click", (e) => {
              JokePunchline(jokeData)
            })
          })
    } else if(jokeType === "programming"){
        getProgrammingJoke()
        .then((joke) => {
          jokeData = useJoke()
          JokeSetup(jokeData)
      
            const jokePunch = document.querySelector(".request-joke-punchline");
            jokePunch.addEventListener("click", (e) => {
              JokePunchline(jokeData)
            })
          })
    } else if(jokeType === "general"){
        getGeneralJoke()
        .then((joke) => {
          jokeData = useJoke()
          JokeSetup(jokeData)
      
            const jokePunch = document.querySelector(".request-joke-punchline");
            jokePunch.addEventListener("click", (e) => {
              JokePunchline(jokeData)
            })
          })
    }
  })
})
