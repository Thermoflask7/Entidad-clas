
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { empresa } from './empresa';


interface contactoAttributes{ 
  id: number; 
  idempresa: number;
  tipo: string;
  contacto: string;
} 

interface contactoCreationAttributes extends Optional<contactoAttributes, 'id'>{} 
@Table ({
    tableName: "contactos"
})
export class contacto extends Model<contactoAttributes,contactoCreationAttributes>{
  @ForeignKey(() => empresa)
    @Column
    idempresa!: number;

    @BelongsTo(() => empresa)
    empresas!: empresa;
    
    @Column
    tipo!: string;

    @Column
    contacto!: string;

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

}