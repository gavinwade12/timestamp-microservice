const express = require('express');
let app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get("/:date", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const time = {unix: null, natural: null};
  
  let dateToParse = req.params.date;
  let testInt = parseInt(dateToParse);
  if (testInt)
    dateToParse = testInt;
  let parsedDate = new Date(dateToParse);
  if (parsedDate) {
    time.unix = parsedDate.getTime();
    let month = 
  }
  
  res.send(JSON.stringify(time));
});

var listener = app.listen(process.env.PORT, () => console.log('listening on port: ' + process.env.PORT));
