import {Schema, model, connection} from 'mongoose';


interface carsInfo {
    cor?: string;
    ano?: number;
    transmissao?: string;
    combustivel?: string;
    tracao?: string;
}
interface carsType {
    modelo: string;
    categoria: string;
    nome: string;
    motorizacao: string;
    marca: string;
    grupo: string;
    price?: string;
    caracteristicas?: carsInfo;
}

const schema = new Schema<carsType>({
    modelo: {
        type: String,
    },
    categoria: {
        type: String,
    },
    nome: {
        type: String,
    },
    motorizacao: {
        type: String,
    },
    marca: {
        type: String,
    },
    grupo: {
        type: String,
    },
    price: {
        type: String,
    },
    caracteristicas: {
        cor: {
            type: Number,
        },
        ano: {
            type: Number,
        },
        transmissao: {
            type: String,
        },
        combustivel: {
            type: String,
        },
        tracao: {
            type: String,
        }
    }
});

const modelName: string = 'Cars';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<carsType>(modelName, schema);
