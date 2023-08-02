import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import User from './User';
import Plot from './Plot';
import Phase from './Phase';

class Disease extends Model {
    declare id: number;
    declare name: string;
    declare status: boolean;
    declare plotId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Disease.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        plotId: {
            type: DataTypes.INTEGER,
            references: {
                model: Plot,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Disease',
        tableName: 'disease',
    }
);

Disease.belongsTo(Plot);
Disease.hasMany(Phase, { foreignKey: 'diseaseId' });

export default Disease;
