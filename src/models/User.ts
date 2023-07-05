import {connection, model, Schema} from 'mongoose';

type userType = {
    email: string,
    name: string,
    password: string,
    rules?: string,
}
const schema = new Schema<userType>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rules: {
        type: String,
        required: false
    }
});

const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<userType>(modelName, schema);
