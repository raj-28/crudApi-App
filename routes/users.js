import express from "express";
import { createUser, getUser, findUser, deleteUser, modifyUser } from "../controllers/users.js";
const router = express.Router();


// All routes in here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', modifyUser)

export default router;