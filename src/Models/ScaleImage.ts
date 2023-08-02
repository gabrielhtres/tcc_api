import Image from './Image';
import sequelize from '../Config/sequelize';
import { DataTypes } from 'sequelize';
import Scale from './Scale';

class ScaleImage extends Image {
    declare scaleId: number;
}

ScaleImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        link: DataTypes.STRING,
        scaleID: {
            type: DataTypes.INTEGER,
            references: {
                model: Scale,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'ScaleImage',
        tableName: 'scale_image',
    }
);

ScaleImage.belongsTo(Scale);

export default ScaleImage;
