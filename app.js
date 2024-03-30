import express from "express";
import BooksRouter from "./src/features/books/books.routes.js"
const app=express();
const PORT=3000;

app.use(express.json())
// app.get("/books",(req, res)=>{
//     res.send("hello")
// })
app.use("/books", BooksRouter)

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
})
