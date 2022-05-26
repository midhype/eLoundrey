import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    phone:{
        type: DataTypes.STRING,
        length: 20,
        allowNull: true,
        defaultValue: null,
    },
    photo :{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    password: { 
        type: DataTypes.STRING,
    },
    refresh_token: {    
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
},{
    freezeTableName:true
})

export default Users;
