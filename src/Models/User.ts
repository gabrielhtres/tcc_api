import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import Log from './Log';
import Analysis from './Analysis';

class User extends Model {
    declare id: number;
    declare name: string;
    declare cpf: string;
    declare email: string;
    declare phone: string;
    declare isAdmin: boolean;
    declare password: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'user',
    }
);

User.hasMany(Log, { foreignKey: 'userId' });
User.hasMany(Analysis, { foreignKey: 'userId' });

export default User;
