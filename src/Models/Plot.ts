import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import User from './User';
import Disease from './Disease';

class Plot extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare status: boolean;
    declare analysisId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Plot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        analysisId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Plot',
        tableName: 'analysis',
    }
);

Plot.belongsTo(User);
Plot.hasMany(Disease, { foreignKey: 'plotId' });

export default Plot;
