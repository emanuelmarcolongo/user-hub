export type UserEntity = {
  id: number;
  name: string;
  email: string;
  imgUrl: string;
  password: string;
  isDeleted: boolean;
};

export type UserDTO = Omit<UserEntity, "id">;
