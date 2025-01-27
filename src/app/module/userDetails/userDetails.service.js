import { UserDetail } from "./userDetails.model.js";

const createUserDetailIntoDB = async (payload) => {
  console.log({ payload });
  // Save non-sensitive data
  const result = await UserDetail.create(payload);
  return result;
};

const getUserDetailsByEmailFromDB = async (email) => {
  const userDetails = await UserDetail.findOne({ user: email });
  if (!userDetails) {
    return {
      error: true,
      errorDetails: { message: "User details not found", code: 404 },
    };
  }

  return userDetails;
};

export const UserDetailsServices = {
  createUserDetailIntoDB,
  getUserDetailsByEmailFromDB,
};
