const { Unauthorized } = require("http-errors");
const { User } = require("../models/users");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      throw new Unauthorized("Not authorized");
    }

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      throw new Unauthorized("Not authorized");
    }

    req.user = user;

    next();
  } catch (error) {
    if (
      error.message.toLowerCase() === "Invalid signature".toLowerCase() ||
      error.message.toLowerCase() === "jwt expired".toLowerCase()
    ) {
      error.status = 401;
      console.log(error.message);
    }
    next(error);
  }
};

module.exports = authenticate;
