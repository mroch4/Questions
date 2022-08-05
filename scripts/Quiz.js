import QUESTIONS from './questions.js'
import { SORTING_ENABLED } from './config.js'

class Quiz {

    constructor(quizPlaceholder, arrayOfRandomNumbers) {
        this.quizPlaceholder = quizPlaceholder;
        this.arrayOfRandomNumbers = arrayOfRandomNumbers
    }

    render = () => {
        this.quizPlaceholder.innerText = ''

        const questions = []

        this.arrayOfRandomNumbers.forEach(element => {
            const question = QUESTIONS.find(item => item.id === element)
            questions.push(question)
        })

        questions
            .sort((a, b) => {
                if (SORTING_ENABLED) return a.id - b.id
                else return 0
            })
            .map((item, index) => {
                const question = document.createElement('article')
                question.classList.add('card')
                const content = `<h6>Pytanie nr ${index + 1}:</h6><p>${item.content}<span>(${item.id})</span></p>`
                question.innerHTML = content
                this.quizPlaceholder.append(question)
            })
    }
}

export default Quiz