
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, HasMany} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { contacto } from './contacto';


interface empresaAttributes{ 
  id: number; 
  empresa: string;
  descripcion: string;
} 

interface empresaCreationAttributes extends Optional<empresaAttributes, 'id'>{} 
@Table ({
    tableName: "empresas"
})
export class empresa extends Model<empresaAttributes,empresaCreationAttributes>{
    
    @Column
    empresa!: string;

    @Column
    descripcion!: string;

    @HasMany(() => contacto)
    contactos!: contacto[];

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

}