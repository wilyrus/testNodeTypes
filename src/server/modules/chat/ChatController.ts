import express from 'express';
import ArticleModel from './models/ArticleModel';

const app = express.Router();

app.get('/heroes', (req, res) => {
  res.send(200, [{ id: 10, name: 'Starlord', saying: 'oh yeah' }]);
});

app.get('/', (req, res) => {
  res.send('RootView');
});

app.get('/articles', (req, res, next) => {
  ArticleModel.all((error: Error, articles: Array<ActicleData>) => {
    if (error) {
      return next(error);
    }
    res.send(articles);
  });
});

app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  ArticleModel.find(id, (error: Error, article: ActicleData) => {
    if (error) {
      return next(error);
    }
    res.send(article);
  });
});

app.post('/articles', (req, res, next) => {
  const url = req.body.url;

  ArticleModel.create(url, (error: Error, article: ActicleData) => {
    if (error) {
      return next(error);
    }
    res.send('OK');
  });
});

app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  ArticleModel.delete(id, (error: Error) => {
    if (error) {
      return next(error);
    }
    res.send({ message: 'Deleted' });
  });
});

module.exports = router;
