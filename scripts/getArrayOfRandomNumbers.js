import QUESTIONS from './questions.js'
import { QUIZ_SIZE } from './config.js'

const getArrayOfRandomNumbers = () => {
    const arrayOfRandomNumbers = []
    while (arrayOfRandomNumbers.length < QUIZ_SIZE) {
        const randomNumber = Math.ceil(QUESTIONS.length * Math.random())
        if (arrayOfRandomNumbers.indexOf(randomNumber) === -1) arrayOfRandomNumbers.push(randomNumber)
    }
    return arrayOfRandomNumbers
}

export default getArrayOfRandomNumbers