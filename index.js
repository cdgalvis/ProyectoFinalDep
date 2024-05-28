import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({"message": "Hola"});
})


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=> console.log('Server listening on port', app.get('port')));