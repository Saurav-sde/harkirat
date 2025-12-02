import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export const userMiddleware = (req : Request,res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, process.env.JWT_KEY!);
    if(decoded) {
        if(typeof decoded === "string") {
            return res.status(403).json({message: "You are not logged in"})
        }
        req.userId = (decoded as JwtPayload).id;
        next();
    } else {
        res.status(403).json({message: "You are not logged in"})
    }
    console.log("At the end of userMiddleware");
    
}

// override the types of the express request object