import express from 'express'
import getPhotos from '../controllers/albumController.js';

const route = express.Router();

route.get('/album/:albumId',getPhotos)


export default route