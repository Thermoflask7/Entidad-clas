
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 


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
    @Column
    idempresa!: number;
    
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