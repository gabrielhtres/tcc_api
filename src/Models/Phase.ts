import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import Disease from './Disease';
import PhaseImage from './PhaseImage';

class Phase extends Model {
    declare id: number;
    declare name: string;
    declare hasIncidence: boolean;
    declare percentage: number;
    declare meteorology: string;
    declare status: string;
    declare diseaseId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Phase.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        hasIncidence: DataTypes.BOOLEAN,
        percentage: DataTypes.FLOAT,
        meteorology: DataTypes.STRING,
        status: DataTypes.STRING,
        diseaseId: {
            type: DataTypes.INTEGER,
            references: {
                model: Disease,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Phase',
        tableName: 'phase',
    }
);

Phase.hasMany(Phase, { foreignKey: 'phaseId' });
Phase.hasMany(PhaseImage, { foreignKey: 'phaseId' });

export default Phase;
