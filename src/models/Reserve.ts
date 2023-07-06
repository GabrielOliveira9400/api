import {connection, model, Schema} from 'mongoose';

type reserveType = {
    value: number,
    nameClient: string,
    dateInitial: Date,
    dateFinal: Date,
    carModel: string,
    email: string,
}
const schema = new Schema<reserveType>({
    value: {
        type: Number,
    },
    nameClient: {
        type: String,
    },
    dateInitial: {
        type: Date,
    },
    dateFinal: {
        type: Date,
    },
    carModel: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
});

const modelName: string = 'Reserve';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<reserveType>(modelName, schema);
