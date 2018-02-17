const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
  if (Math.random() * 10 > 5) {
    next();
  } else {
    setTimeout(() => {
      res.json({
        message: 'Hi its the FBI',
      })
    }, 1000)
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
