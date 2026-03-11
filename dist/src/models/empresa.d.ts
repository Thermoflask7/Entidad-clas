import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface empresaAttributes {
    id: number;
    empresa: string;
    descripcion: string;
}
interface empresaCreationAttributes extends Optional<empresaAttributes, 'id'> {
}
export declare class empresa extends Model<empresaAttributes, empresaCreationAttributes> {
    empresa: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=empresa.d.ts.map