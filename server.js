const express = require('express');
let app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", (req, res) => {
  const time = {unix: null, natural: null};
  let parsedDate = new Date(request.params.date);
  if (parsedDate) {
    time.unix = parsedDate.getTime();
  }
  res.end();
});

var listener = app.listen(process.env.PORT, () => console.log('listening on port: ' + process.env.PORT));
