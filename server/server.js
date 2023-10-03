import express from 'express';
import 'dotenv/config'
import db from "./db/db-connection.js";
import cors from 'cors';

const app = express();
const PORT = 1212;

app.use(cors());
app.use(express.json()); //req.body

app.get("/", async (req, res) =>  {
    
    try {
        const {rows : allPosts} = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
        res.send(allPosts);
        console.log(allPosts)
    } catch (error) {
        console.error("Error Message!:", error.message);
    }

});

app.post("/", async (req, res) =>  {
    
    try {
        const {title, content, created_at, updated_at, img_url} = req.body;

        const newPost = await db.query (
            "INSERT INTO posts (title, content, created_at, updated_at, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *", [title, content, created_at, updated_at, img_url]
        );

        res.json(newPost.rows[0])
        
    } catch (error) {
        console.error(error.message)
    }

});

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletePost= await db.query("DELETE FROM posts WHERE id = $1", [id]
        );

        res.json("The post was deleted!");

    } catch (error) {
        console.error(error.message)
    }
})

app.put('/:id', async (req, res) => {

    try {

      const { id } = req.params;

      const {title, content, created_at, updated_at, img_url} = req.body;

      const editedPost = await db.query(
        "UPDATE posts SET title = $1, content = $2, created_at = $3, updated_at = $4, img_url = $5 WHERE id = $6 RETURNING *",
        [title, content, created_at, updated_at, img_url, id]
      );

        res.json(editedPost.rows[0])

    } catch(error){
        console.log(error);
    }  
});

app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));
