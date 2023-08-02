import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import User from './User';

class Log extends Model {
    declare id: number;
    declare method: string;
    declare route: string;
    declare payload: string;
    declare userId: number;
    declare createdAt: Date;
}

Log.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        method: DataTypes.STRING,
        route: DataTypes.STRING,
        payload: DataTypes.STRING,
        userId: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'Log',
        tableName: 'log',
    }
);

Log.belongsTo(User);

export default Log;
