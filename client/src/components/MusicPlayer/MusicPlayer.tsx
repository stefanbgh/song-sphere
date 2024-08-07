import { FC, useState, useRef, useEffect } from "react";

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

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { RANDOM_SONG, STOP_SONG } from "../../features/slices/songs.slice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useGetSongsQuery } from "../../features/api/songs.api";

import disc from "../../assets/disc.webp";

import "./MusicPlayer.less";

const MusicPlayer: FC = () => {
	useGetSongsQuery();
	const { activeSong } = useAppSelector((state: RootState) => state.songs);

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [isRaR, setIsRaR] = useState<null | "random" | "repeat">(null);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement>(null);
	const discRef = useRef<HTMLImageElement>(null);

	const dispatch = useAppDispatch();

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
		if (activeSong) {
			discRef.current?.classList.add("rotate");
			audioRef.current?.play();
			setIsPlay(true);
		} else {
			discRef.current?.classList.remove("rotate");
			audioRef.current?.pause();
			setIsPlay(false);
		}
	}, [activeSong]);

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
		dispatch(STOP_SONG());
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
		if (isRaR === "repeat") {
			setCurrentTime(0);
			audioRef.current?.play();

			return;
		}

		if (isRaR === "random") {
			setCurrentTime(0);
			dispatch(RANDOM_SONG());
			audioRef.current?.load();
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
				<p>{activeSong!.sng_title}</p>
			</div>
			<div className="mid">
				<audio ref={audioRef} src={activeSong!.sng_path} />
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
						to={`${AppRoutes.SONGS}/${activeSong?.sng_id}`}
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
