import Quiz from './Quiz.js'
import getArrayOfRandomNumbers from './getArrayOfRandomNumbers.js'

const quizPlaceholder = document.getElementById('app')
const button = document.getElementById('button')
let quiz

const initialize = () => {
    const storedArray = localStorage.getItem('storedArray')

    if (storedArray === null) {
        const arrayOfRandomNumbers = getArrayOfRandomNumbers()
        localStorage.setItem('storedArray', arrayOfRandomNumbers)
        quiz = new Quiz(quizPlaceholder, arrayOfRandomNumbers)
    } else {
        const arrayOfRandomValues = Array.from(storedArray.split(','))
        const arrayOfRandomNumbers = arrayOfRandomValues.map(item => parseInt(item))
        quiz = new Quiz(quizPlaceholder, arrayOfRandomNumbers)
    }
    quiz.render()
}

window.onload = initialize()

button.onclick = () => {
    localStorage.clear()
    initialize()
}