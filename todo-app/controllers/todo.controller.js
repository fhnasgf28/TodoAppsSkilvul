const db = require('..models');
const {Todo} = db;

module.exports = {
    getAllTodo : async ( req, res) => {
        try {
            const todos = await Todo.findAll();
            console.log(todos);
            res.status(200).json(todos);
        } catch (err) {
            res.status(500).json ({
                message : 'Erro in getAllTodo',
            });
        }
},

    getTodoByID : async (req, res) => {
        try {
            const todos = await Todo.findOne ({
                where : {
                    id: req.params.id
                }
            });
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({
            message: 'Error in getIdTodo',
        });
       }
    },

    addTodo: async (req,res) => {
        try {
            const { title, description, iscompleted} = 
            req.body;
            const newTodoDate = {
                title: title,
                description: description,
                iscompleted : iscompleted ? iscompleted : false
            }

            const todoData = await Todo.create(newTodoDate);
            console.log(todoData);
            res.status(201).json ({
                message: 'new Todo created',
                todoData
            });
        } catch (err) {
            res.status(500).json({
                message: err.message|| 'internal server error',
            });
        }
    },

    updateTodoByID : async (req,res) => {
        try {
            const {title, description,iscompleted} = req.body;

            const updateTodoData = {
                title: title,
                description: description,
                iscompleted: iscompleted,
            };
            
            const updateTodo = await Todo.update(updateTodoData,{
                where : {
                    id: req.params.id
                }
            });

            res.status(200).json ({
                message: 'Update todo success',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'internal server error',
            });
        }
    },

    deleteTodoByID : async (req, res) => {
        try {
            const deleteTodo = await Todo.destroy ({
                where: {
                    id: req.params.id,
                }
            })
            res.status(200).json({
                message : 'Todo deleted successfully',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Internal Server Error',
            });
        }
    },

    deleteAllTodo:async (req, res) => {
        res.send();
    }
}