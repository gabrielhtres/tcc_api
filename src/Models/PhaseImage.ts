import Image from './Image';
import sequelize from '../Config/sequelize';
import { DataTypes } from 'sequelize';
import Phase from './Phase';

class PhaseImage extends Image {
    declare percentage: number;
    declare phaseId: number;
}

PhaseImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        link: DataTypes.STRING,
        percentage: DataTypes.FLOAT,
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
        modelName: 'PhaseImage',
        tableName: 'phase_image',
    }
);

PhaseImage.belongsTo(Phase);

export default PhaseImage;
