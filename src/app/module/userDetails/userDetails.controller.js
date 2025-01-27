import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { UserDetailsServices } from "./userDetails.service.js";
// import errorResponse from "../../utils/sendError.js";

const createUserDetails = catchAsync(async (req, res) => {
  const result = await UserDetailsServices.createUserDetailIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User details created successfully",
    data: result,
  });
});

export const UserDetailsController = {
  createUserDetails,
};
