
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 


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

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

}