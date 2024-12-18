const jwt = require('jsonwebtoken')
const auth = (req, res, next) =>{
    const token = req.header('x-auth-token');
    console.log(token)

    if(!token){
        return res.status(401).send('Access denied no token provided');

    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_kEY);
        req.user =decoded;
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
        
    }
 
}
module.exports = auth