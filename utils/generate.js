// dependencies
const lodash = require('lodash')
const dictionary = require('./dictionary')

// generator function for the phrase(s) made by the twitter bot
function generate() {

    var output = '';
    var randomNumber = lodash.random(1, 5);

    const intro = lodash.capitalize(lodash.sample(dictionary.introductions));
    const greeting = lodash.capitalize(lodash.sample(dictionary.greetings));
    const question = lodash.capitalize(lodash.sample(dictionary.questions));
    const description = lodash.capitalize(lodash.sample(dictionary.descriptions));
    
    if (randomNumber === 1) {
      output = intro + ', ' + question
    } else if (randomNumber === 2) {
      output =  greeting + ', ' + question + ' ' + description
    } else if (randomNumber === 3) {
      output = description + ' ' + question
    }else if (randomNumber === 4) {
        output = greeting + '!' + ' ' + question
    }else {
      output = intro + ', ' + greeting + '!' + "\n" + question + ' ' + description
    }
    return  output 
}

// console.log(generate())

module.exports = generate