import {connect} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const mongoConnect = async () => {
    try{
       console.log('Conectando ...');
       await connect(process.env.MONGO_URL as string);
       console.log('Conectado com sucesso!');

    } catch(error){
        console.log('Erro na conexão com o Banco de dados',error);
}
}