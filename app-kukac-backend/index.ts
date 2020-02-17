import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { Controller } from './controllers/controller';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cors());

app.post('/', async function (req, res, next) {
    let dados = req.body;

    dados.cep = dados.cep.replace(/[.\-]/gi, '');
    const controller = new Controller();

    dados.endereco = await controller.getEndereco(dados.cep);

    dados.rendaPerCapita = await controller.calculaRendaPerCapita(parseFloat(dados.renda), parseInt(dados.dependentes));

    res.status(200).send(dados);
});

app.listen(3000, '0.0.0.0', () => { console.log('Servidor Online na porta 3000') });