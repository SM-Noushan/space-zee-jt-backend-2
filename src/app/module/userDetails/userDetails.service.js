import { UserDetail } from "./userDetails.model.js";

const createUserDetailIntoDB = async (payload) => {
  console.log({payload});
  // Save non-sensitive data
  const result = await UserDetail.create(payload);
  return result;
};

export const UserDetailsServices = {
  createUserDetailIntoDB,
};
