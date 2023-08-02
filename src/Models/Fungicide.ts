import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import Log from './Log';
import Phase from './Phase';

class Fungicide extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare phaseId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Fungicide.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        phaseId: {
            type: DataTypes.INTEGER,
            references: {
                model: Phase,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'Fungicide',
        tableName: 'fungicide',
    }
);

Fungicide.belongsTo(Phase);

export default Fungicide;
