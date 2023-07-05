import {Schema, model, connection} from 'mongoose';

interface EmployerInfo {
    idade: number;
    salario: number;
    endereco: string;
    cidade: string;
    telefone: string;
}

interface employerType {
    nome: string;
    cargo: string;
    departamento: string;
    informacoes: EmployerInfo;
}

const schema = new Schema<employerType>({
    nome: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    informacoes: {
        idade: {
            type: Number,
            required: true
        },
        salario: {
            type: Number,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        }
    }
});

const modelName: string = 'Employer';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<employerType>(modelName, schema);
