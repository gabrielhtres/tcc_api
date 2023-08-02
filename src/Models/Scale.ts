import { DataTypes, Model } from 'sequelize';
import sequelize from '../Config/sequelize';
import ScaleImage from './ScaleImage';

class Scale extends Model {
    declare id: number;
    declare name: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Scale.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'Scale',
        tableName: 'scale',
    }
);

Scale.hasMany(ScaleImage, { foreignKey: 'scaleId' });

export default Scale;
