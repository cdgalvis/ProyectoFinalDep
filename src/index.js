import express from 'express'
import morgan from 'morgan';

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({"message": "Hola"});
})


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=> console.log('Server listening on port', app.get('port')));