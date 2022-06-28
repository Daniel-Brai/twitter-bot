// dependencies
const Twitter = require('twitter')

// import utils
const generate = require('../utils/generate')

const tweet = new Twitter({   
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret_key: process.env.TWITTER_CONSUMER_SECRET_KEY,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
})

// tweet interval in milliseconds
const tweetInterval = 64800000;

// make tweets 
const makeTweet = () => {
    let content = generate()

    tweet.post('statuses/update', {status: content} , (error, res) => {
        if (error) {
            return res.status(401).send('Your bot update was not sent due to some error')
        }
        return res.status(200).send('The posted tweet is:', content)
    })
}

// make the bot tweet in an interval
const alive_bot = () => { setInterval(makeTweet, tweetInterval) }

module.exports = { alive_bot }
