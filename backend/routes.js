const express = require("express")
const Post = require("./models/post") // new
const router = express.Router()

// Gets all posts
router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.findOne({ _id: req.params.id })

        res.send(posts)
    } catch {
        res.status(404)
        res.send({ error: "Post Doesn't Exist" })
    }
})

router.post("/posts", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    await post.save()
    res.send(post)
}),

    router.delete("/posts/:id", async (req, res) => {
        try {
            await Post.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }

    
    }),

        module.exports = router
