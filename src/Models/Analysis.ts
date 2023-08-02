import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import User from './User';
import Plot from './Plot';

class Analysis extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare xCoordinate: number;
    declare yCoordinate: number;
    declare status: boolean;
    declare userId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Analysis.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        xCoordinate: DataTypes.BOOLEAN,
        yCoordinate: DataTypes.BOOLEAN,
        userId: DataTypes.INTEGER,
        status: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'Analysis',
        tableName: 'analysis',
    }
);

Analysis.belongsTo(User);
Analysis.hasMany(Plot, { foreignKey: 'analysisId' });

export default Analysis;
