// dependencies
const http = require('http');

// keep the twitter bot server alive
const keepAlive = () => {
    try {
      http.get(process.env.CLIENT_URL)
      console.log('GET request sent; kept alive.');
    } catch(e) {
      console.log(e);
    }
}
  
// Pinging the app every 6hrs to keep alive
const alive_server = () => { setInterval(keepAlive, 2160000) }

module.exports = { alive_server }