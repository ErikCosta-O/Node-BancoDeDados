import{Model,DataTypes}from 'sequelize'
import { defaultValueSchemable } from 'sequelize/types/utils'
import{sequelize}from '../instances/mysql'

export interface UserInstance extends Model{
    id: number,
    name:string,
    age:number
}

export const User= sequelize.define<UserInstance>("User,",{
    id:{
        primaryKey: true,
        type:DataTypes.NUMBER
    },
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    }
},{
    tableName:'users',
    timestamps:false
})
