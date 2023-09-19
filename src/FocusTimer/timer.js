import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

export function countDown() {
  if (!state.isRunning) {
    return
  }
  console.log("iniciou")

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }
  if (minutes < 0) {
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  // callback é uma função chamando outra função function // recursão quando uma função chama ela mesmo dentro
  setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  // nulish coalesing operator
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
