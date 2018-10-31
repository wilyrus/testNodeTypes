import express from 'express';

const app = express();
const articles = [{ title: 'Example' }];

app.set('port', process.env.PORT || 3000);

app.get('/articles', (req, res) => {
  res.send(articles);
});

app.listen(app.get('port'), () => {
  console.log('App on', app.get('port'));
});
