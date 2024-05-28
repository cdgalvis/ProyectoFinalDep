import { Router } from 'express'
const router = Router();

import * as messagesCtrl from "../controllers/messages.controller.js";


router.get("/listMessages", messagesCtrl.getMessages);


export default router;