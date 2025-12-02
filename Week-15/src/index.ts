
declare global {
    namespace Express {
        export interface Request {
            userId?: string; 
        }
    }
}


import express from "express";
const app = express();
import mongoose from "mongoose";
import "dotenv/config";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import jwt from "jsonwebtoken"
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";

app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    // zod validation, hash the password
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "user signed up"
        })
    } catch (err) {
        res.status(411).json({
            message: "User already exists"
        })
    }
}) 

app.post("/api/v1/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const existingUser = await UserModel.findOne({username, password});
        if(existingUser) {
            const token = jwt.sign({id:existingUser._id}, process.env.JWT_KEY!);

            res.json({
                token: token
            })
        } else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    } catch (err) {
        
    }
})

app.post("/api/v1/content",userMiddleware,async(req,res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link, 
        type,
        title: req.body.title,
        // @ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({ 
        message: "Content added"
    })
})

app.get("/api/v1/content",userMiddleware, async(req,res) => {
    // @ts-ignore
    console.log("in the endpoint");
    
    const userId = req.userId;
    const content = await ContentModel.find({userId}).populate("userId", "username")

    if(!content)
        return res.json({message: "content chud gyi"})

    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware,async (req,res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        // @ts-ignorev 
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share",userMiddleware, async(req,res) => {
    const {share} = req.body;
    if(share) {
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash
        })

        res.json({
            message: "/share/" + hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        })
        res.json({
            message: "Removed Link"
        })
    }

    res.json({
        message: "Updated shared link"
    })
})

app.get("/api/v1/brain/:shareLink", async(req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({hash});
    if(!link) {
        return res.status(211).json({
            message: "Sorry incorrect input"
        })
    }

    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findById(link.userId)
    
    res.json({
        username: user?.username,
        content: content
    })
})


const InitialiseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL!);
        app.listen(3000, () => {
            console.log("server is listening at port 3000");
        })
    } catch (err) {
        console.log("Error Occured: " + err);
    }
}

InitialiseConnection();