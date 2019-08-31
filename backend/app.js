const express = require('express');

const app = express();

app.use((req, res, next)=>{
  console.log('First middleware!');
  next(); // this is absolutely necessary here!
  // try commenting it out to see what happens
  // reason: without next, no response is returned &
  // middleware gets stuck after 'first middleware'
});

app.use((req, res, next)=>{
  res.send('Hello from express!');
});

module.exports = app; // this exports app along with associated middlewares
