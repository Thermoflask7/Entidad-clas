import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface contactoAttributes {
    id: number;
    idEmpresa: number;
    tipo: string;
    contacto: string;
}
interface contactoCreationAttributes extends Optional<contactoAttributes, 'id'> {
}
export declare class contacto extends Model<contactoAttributes, contactoCreationAttributes> {
    idempresa: number;
    tipo: string;
    contacto: string;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=contacto.d.ts.map