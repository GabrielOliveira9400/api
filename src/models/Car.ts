import {Schema, model, connection} from 'mongoose';


interface carsInfo {
    cor: string;
    ano: number;
    transmissao: string;
    combustivel: string;
    tracao: string;
}
interface carsType {
    modelo: string;
    categoria: string;
    nome: string;
    motorizacao: string;
    marca: string;
    grupo: string;
    placa: string;
    caracteristicas: carsInfo;
}

const schema = new Schema<carsType>({
    modelo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    nome: {
        type: String,
    },
    motorizacao: {
        type: String,
    },
    marca: {
        type: String,
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    caracteristicas: {
        cor: {
            type: Number,
            required: true
        },
        ano: {
            type: Number,
            required: true
        },
        transmissao: {
            type: String,
            required: true
        },
        combustivel: {
            type: String,
            required: true
        },
        tracao: {
            type: String,
            required: true
        }
    }
});

const modelName: string = 'Cars';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<carsType>(modelName, schema);
