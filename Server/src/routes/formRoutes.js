import express from 'express';
import {enquiryForm, getenquiries} from '../controller/formController.js';
export const formRouter=express.Router();
formRouter.post('/add-enquiry',enquiryForm);
formRouter.get('/get-enquiries',getenquiries)