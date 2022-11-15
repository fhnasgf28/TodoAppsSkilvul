'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTtyapes) => {
    class Todo extends Model {
        static associate (models){
            // mendefinisikan asosiasi di sini
        }
    }

    Todo.init ({
        title : DataTtyapes.STRING,
        description : DataTtyapes.STRING,
        isCompleted : DataTtyapes.BOOLEAN
    },{
        sequelize,
        modelName : 'Todo',
    });

    return Todo;
};