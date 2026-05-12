import app from './config/express';
import router from './config/routes'
import './config/enviroment'

const PORT = app.get('port');

app.use(router)


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(process.env.PORT);
});