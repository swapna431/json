import express from "express";
import testPostController from '../testcontroller.js'


const router = express.Router()

router.post('/test-post', testPostController);


export default router;