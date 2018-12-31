import express from 'express';
import bodyParser from 'body-parser';

type ActicleData = {
  id: number;
  title: string;
  content: string;
};

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
  console.log('App on', app.get('port'));
});
