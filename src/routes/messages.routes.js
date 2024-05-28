import { Router } from 'express'
const router = Router();

import * as messagesCtrl from "../controllers/messages.controller.js";


router.get("/listMessages", messagesCtrl.getMessages);
router.get("/addMessage",   messagesCtrl.getAddMessage);
router.post("/addMessage",   messagesCtrl.postAddMessage);
router.get("/editMessage/:id",  messagesCtrl.getEditMessage);
router.post("/editMessage/:id",  messagesCtrl.postEditMessage);
router.get("/deleteMessage/:id",messagesCtrl.getDeleteMessage);


export default router;