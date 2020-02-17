import axios from 'axios';

export class Controller {
    constructor() { }

    axiosInstance = axios.create({
        baseURL: 'https://viacep.com.br/ws'
    });

    getEndereco(cep) {
        return new Promise((resolve, reject) => {
            this.axiosInstance.get(cep + '/json').then(
                endereco => resolve(!endereco.data.erro ? endereco.data : 'Endereço não encontrado')).catch(
                    () => resolve('Endereço não encontrado'));
        });
    }

    calculaRendaPerCapita(renda, dependentes) {
        const rendaPerCapita = renda / (dependentes + 1);
        return rendaPerCapita.toFixed(2);
    }
}