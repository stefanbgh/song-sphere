import { IArtist } from "./IArtist";
import { ISong } from "./ISong";

export interface IHome {
	msg: string;
	popular_artists: IArtist[];
	popular_songs: ISong[];
}
