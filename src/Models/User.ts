import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';

class User extends Model {
    declare id: number;
    declare name: string;
    declare cpf: string;
    declare email: string;
    declare phone: string;
    declare isAdmin: boolean;
    declare password: string;
    // declare analyzes: Analyze[];
    // declare logs: Log[];
    // declare jwtToken: string;
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
        // analyzes: DataTypes.ARRAY(DataTypes.INTEGER),
        // logs: DataTypes.ARRAY(DataTypes.INTEGER),
        // jwtToken: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
    }
);
