import express from 'express'
import { getNotes , addNote , updateNote , deleteNote } from './queries.js'
import cors from 'cors'
import dotenv from "dotenv";


dotenv.config();

const app = express()



app.use(cors({
  origin:process.env.FRONTEND_CORS_ORIGIN, 
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));




app.use(express.json())



app.get('/notes', async(req,res)=>{
    const notes = await getNotes()
    res.json(notes)
})


app.post('/notes' , async(req,res)=>{
    const {note} = req.body
    const response = await addNote(note)
    res.json(response)

})

app.patch('/notes/:id' , async(req,res)=>{
    const { id } = req.params
    const response = await updateNote(id)
    res.json(response)
})


app.delete('/notes/:id' , async(req,res)=>{
    const { id } = req.params
    const response = await deleteNote(id)
    res.json(response)
})



app.listen(process.env.PORT , ()=>{
    console.log('server started running on port 3000')
})