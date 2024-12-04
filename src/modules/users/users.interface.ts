export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: string;
  status: boolean;
  isDeleted: boolean;
};



export default TUser;
