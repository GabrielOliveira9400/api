import {Schema, model, connection} from 'mongoose';


interface clientsType {
    nome: string;
    idade: number;
    endereco: string;
    cidade: string;
    telefone: string;
}

const schema = new Schema<clientsType>({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
    },
    cidade: {
        type: String,
    },
    telefone: {
        type: String,
        required: true
    }
});

const modelName: string = 'Clients';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<clientsType>(modelName, schema);
