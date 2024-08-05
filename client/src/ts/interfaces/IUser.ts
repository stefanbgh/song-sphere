import { IUserDTO } from "../dto/IUserDTO";

export interface IUser extends IUserDTO {
	usr_id: string; // UUID
}
