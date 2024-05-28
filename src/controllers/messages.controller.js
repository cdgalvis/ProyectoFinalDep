import dbConfig from "../database.js"

export const getMessages = async (req, res) => {
    try {
        const result = await dbConfig.query('SELECT * FROM messages')
        const info = result.rows
        res.render('messages/list', { datos: info })  
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getDeleteMessage =  async (req, res) => {
    try {
        const id = req.params.id
        await dbConfig.query('DELETE FROM messages WHERE msg_id = $1', [id]);
        res.redirect('/listMessages');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAddMessage =  (req, res) => {
    res.render('messages/add')
};

export const postAddMessage =  async (req, res) => {
    try {
        const { msg_id, incoming_msg_id, outgoing_msg_id, msg } = req.body
        await dbConfig.query('INSERT INTO messages (msg_id, incoming_msg_id, outgoing_msg_id, msg) VALUES ($1, $2, $3, $4)', [msg_id, incoming_msg_id, outgoing_msg_id, msg])
        res.redirect('/listMessages');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getEditMessage =  async (req, res) => {
    try {
        const id = req.params.id
        const result = await dbConfig.query('SELECT * FROM messages WHERE msg_id = $1', [id]);
        const messageEdit = result.rows[0]
        res.render('messages/edit', { message: messageEdit })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postEditMessage =  async (req, res) => {
    try {
        const id = req.params.id
        const { msg_id, incoming_msg_id, outgoing_msg_id, msg } = req.body
        
        await dbConfig.query('UPDATE messages SET incoming_msg_id = $1, outgoing_msg_id = $2, msg = $3 WHERE msg_id = $4', [incoming_msg_id, outgoing_msg_id, msg, id]);
        res.redirect('/listMessages');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};