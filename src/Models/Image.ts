import { Model } from 'sequelize';

class Image extends Model {
    declare id: number;
    declare link: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

export default Image;
