import { FC, useState, useRef, useEffect, useContext, Context } from "react";

import {
	IoPlayBackCircle,
	IoPlayCircle,
	IoPlayForwardCircle,
	IoPauseCircle,
	IoStopCircle,
} from "react-icons/io5";
import { FaRandom } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlineLyrics } from "react-icons/md";

import disc from "../../assets/disc.webp";
import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";

import "./MusicPlayer.less";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

const MusicPlayer: FC = () => {
	const { isActive, setIsActive } = useContext(
		SongContext as Context<ISongContext>
	);

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [isRaR, setIsRaR] = useState<null | "random" | "repeat">(null);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const audioRef = useRef<HTMLAudioElement>(null);
	const discRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const audio = audioRef.current;
		audio?.addEventListener("timeupdate", handleTimeUpdate);
		audio?.addEventListener("loadedmetadata", handleLoadedMetadata);
		audio?.addEventListener("ended", handleEnded);

		return () => {
			audio?.removeEventListener("timeupdate", handleTimeUpdate);
			audio?.removeEventListener("loadedmetadata", handleLoadedMetadata);
			audio?.removeEventListener("ended", handleEnded);
		};
		// eslint-disable-next-line
	}, [isRaR]);

	useEffect(() => {
		if (isActive) {
			discRef.current?.classList.add("rotate");
			audioRef.current?.play();
			setIsPlay(true);
		} else {
			discRef.current?.classList.remove("rotate");
			audioRef.current?.pause();
			setIsPlay(false);
		}
	}, [isActive]);

	const handleClick = () => {
		if (isPlay) {
			discRef.current?.classList.remove("rotate");
			audioRef.current?.pause();
			setIsPlay(false);
		} else {
			discRef.current?.classList.add("rotate");
			audioRef.current?.play();
			setIsPlay(true);
		}
	};

	const handleClose = () => {
		setIsActive(false);
	};

	const handleTimeUpdate = () => {
		setCurrentTime(audioRef.current?.currentTime || 0);
	};

	const handleLoadedMetadata = () => {
		setDuration(audioRef.current?.duration || 0);
	};

	const handleSeek = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (audioRef.current) {
			const seekBar = event.currentTarget;
			const rect = seekBar.getBoundingClientRect();
			const offsetX = event.clientX - rect.left;
			const newTime = (offsetX / rect.width) * duration;
			audioRef.current.currentTime = newTime;
			setCurrentTime(newTime);
		}
	};

	const handleRandomAndRepeat = (param: "random" | "repeat") => {
		if (param === "random") {
			if (isRaR === "random") setIsRaR(null);
			else setIsRaR("random");
		}

		if (param === "repeat") {
			if (isRaR === "repeat") setIsRaR(null);
			else setIsRaR("repeat");
		}
	};

	const handleEnded = () => {
		if (isRaR !== null) {
			setCurrentTime(0);
			audioRef.current?.play();

			return;
		}

		setIsPlay(false);
		setCurrentTime(0);
		discRef.current?.classList.remove("rotate");
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	return (
		<div className="player">
			<div className="left">
				<img ref={discRef} width={75} src={disc} alt="disc" />
				<p>Adele – Set Fire to the Rain</p>
			</div>
			<div className="mid">
				<audio
					ref={audioRef}
					src="https://uklnvbfhflzvuntfjajg.supabase.co/storage/v1/object/public/songs/Adele/Set_Fire_to_the_Rain.mp3"
				/>
				<div>
					<IoPlayBackCircle size={40} className="icon" />
				</div>
				<div>
					{isPlay ? (
						<IoPauseCircle
							size={40}
							className="icon"
							onClick={handleClick}
						/>
					) : (
						<IoPlayCircle
							size={40}
							className="icon"
							onClick={handleClick}
						/>
					)}
				</div>
				<div>
					<IoStopCircle
						size={40}
						className="icon"
						onClick={handleClose}
					/>
				</div>
				<div>
					<IoPlayForwardCircle size={40} className="icon" />
				</div>
				<div>
					<FaRandom
						size={20}
						className={
							isRaR === "random"
								? "icon active random"
								: "icon random"
						}
						onClick={() => handleRandomAndRepeat("random")}
					/>
				</div>
				<div>
					<FaRepeat
						size={20}
						className={isRaR === "repeat" ? "icon active" : "icon"}
						onClick={() => handleRandomAndRepeat("repeat")}
					/>
				</div>
				<div>
					<NavLink
						to={`${AppRoutes.SONGS}/1`}
						className={({ isActive }) =>
							isActive ? "lyric active" : "lyric"
						}
					>
						<MdOutlineLyrics size={24} />
					</NavLink>
				</div>
			</div>
			<div className="right">
				<p>{formatTime(currentTime)}</p>
				<div className="seek-bar" onClick={handleSeek}>
					<div
						className="seek-bar-filled"
						style={{ width: `${(currentTime / duration) * 100}%` }}
					/>
					<div
						className="seek-bar-thumb"
						style={{ left: `${(currentTime / duration) * 100}%` }}
					/>
				</div>
				<p>{formatTime(duration)}</p>
			</div>
		</div>
	);
};

export default MusicPlayer;
