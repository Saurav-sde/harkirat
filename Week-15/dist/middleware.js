import jwt, {} from "jsonwebtoken";
export const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, process.env.JWT_KEY);
    if (decoded) {
        if (typeof decoded === "string") {
            return res.status(403).json({ message: "You are not logged in" });
        }
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({ message: "You are not logged in" });
    }
    console.log("At the end of userMiddleware");
};
// override the types of the express request object
//# sourceMappingURL=middleware.js.map