import config from "../config/index.js";
import catchAsync from "../utils/catchAsync.js";
import errorResponse from "../utils/sendError.js";

const auth = () =>
  catchAsync(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    // if token is present
    if (!token) return errorResponse(res, "!Unauthorized access", 401);
    // if token is not valid
    if (token !== config.secretToken)
      return errorResponse(res, "!Unauthorized access", 401);

    next();
  });

export default auth;
