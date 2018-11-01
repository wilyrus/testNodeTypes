import express from 'express';
//import * as RootView from '../node_modules/corevue/dist/index.html';

const app = express();
const articles = [{ title: 'Example' }];

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('RootView');
});

app.listen(app.get('port'), () => {
  console.log('App on', app.get('port'));
});
