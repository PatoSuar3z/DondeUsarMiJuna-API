import { Router } from 'express';
import  { 
    getLocalById,
    getLocales,
    createLocal,
    updateLocalById,
    deleteLocalById
}  from '../controllers/locales.controller.js';

const router = Router();

//GET ALL
router.get('/locales', getLocales)

//GET ONE
router.get('/locales/:id', getLocalById)

//CREATE
router.post('/locales', createLocal)

//DELETE
router.delete('/locales/:id', deleteLocalById)

//PATCH
router.patch('/locales/:id', updateLocalById)


export default router;
