import {Schema, model, connection} from 'mongoose';

interface categoriesType {
    nome: string;
    descricao: string;
    slug: string;
}

const schema = new Schema<categoriesType>({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    },
    slug: {
        type: String,
        required: true
    }
});

const modelName: string = 'Categories';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<categoriesType>(modelName, schema);
