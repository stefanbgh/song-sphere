import { IArtist } from "../models/IArtist";
import { ISong } from "../models/ISong";

export interface IHome {
	msg: string;
	popular_artists: IArtist[];
	popular_songs: ISong[];
	err?: string;
}
