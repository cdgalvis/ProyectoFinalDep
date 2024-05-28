import express from "express";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.json({"message": "Welcome to my Products API"});
})


export default app;