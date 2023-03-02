const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const wigglytuff = await axios.get('https://pokeapi.co/api/v2/pokemon/40');
    const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/132');
    const ponyta = await axios.get('https://pokeapi.co/api/v2/pokemon/77');

    const data = {
      wigglytuff: wigglytuff.data,
      ditto: ditto.data,
      ponyta: ponyta.data,
    };

    res.render('index', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
