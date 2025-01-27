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

const getUserDetailsByEmail = catchAsync(async (req, res) => {
  const result = await UserDetailsServices.getUserDetailsByEmailFromDB(
    req.params.email
  );

  if (result?.error)
    return errorResponse(
      res,
      result?.errorDetails?.message,
      result?.errorDetails?.code
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User details retrieved successfully",
    data: result,
  });
});

export const UserDetailsController = {
  createUserDetails,
  getUserDetailsByEmail,
};
