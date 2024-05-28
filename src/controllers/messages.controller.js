import dbConfig from "../database.js"

export const getMessages = async (req, res) => {
    const result = await dbConfig.query('SELECT * FROM messages')
    const info = result.rows
    res.render('messages/list', { datos: info })  
    //res.json(datos);
    /* try {
        const result = await dbConfig.query('SELECT * FROM messages')
        //console.log(result.rows)        
        res.render('messages/list', { datos: result.rows })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }*/
};
