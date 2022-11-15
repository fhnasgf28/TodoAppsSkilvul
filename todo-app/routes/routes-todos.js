const express = require('express');
const router = express.Router();

const { getAllTodo, 
        getIdTodo, 
        postTodo, 
        updateTodo, 
        deleteTodo, 
        deleteIdTodo } = require('../controllers/todo.controller');

// route

router.get('/', getAllTodo);
router.get('/:id', getIdTodo);
router.post('/', postTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.delete('/', deleteIdTodo);