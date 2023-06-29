const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401);
    throw new Error('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // attach the user to the job routes
    req.user = { userId: payload.user.id, name: payload.user.username }
    next()
  } catch (error) {
    res.status(401);
    throw new Error('Token invalid')
  }
  
});

module.exports = validateToken;