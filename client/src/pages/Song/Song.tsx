import { Context, FC, Fragment, useContext, useState } from "react";

// import { useParams } from "react-router-dom";
import { CiPlay1, CiHeart, CiBookmark } from "react-icons/ci";
import { FaStopCircle } from "react-icons/fa";

import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";

import "./Song.less";

const Song: FC = () => {
	// const { id } = useParams();
	const { isActive, setIsActive } = useContext(
		SongContext as Context<ISongContext>
	);

	const [isFav, setIsFav] = useState<boolean>(false);
	const [isList, setIsList] = useState<boolean>(false);

	const handlePlay = () => {
		setIsActive(!isActive);
	};

	const formatText = (txt: string) => {
		return txt.split(/(\[.*?\])/).map((part, index) => {
			if (part.match(/\[.*?\]/)) {
				return (
					<Fragment key={index}>
						<br />
						<br />
						<span className="verse">{part}</span>
						<br />
					</Fragment>
				);
			}
			return part;
		});
	};

	return (
		<section className="song">
			<h1 className="section-title">Song</h1>
			<p className="section-desc">
				Here you can find more information about the individual artist.
			</p>
			<div className="song-info">
				<div className="song-info_top">
					<h2>Adele – Set Fire to the Rain</h2>
					<div className="icons">
						{isActive ? (
							<FaStopCircle
								size={22}
								className={isActive ? "icon active" : "icon"}
								onClick={handlePlay}
							/>
						) : (
							<CiPlay1
								size={22}
								className={isActive ? "icon active" : "icon"}
								onClick={handlePlay}
							/>
						)}
						<CiHeart
							size={24}
							className={isFav ? "icon active" : "icon"}
							onClick={() => setIsFav((iff) => !iff)}
						/>
						<CiBookmark
							size={22}
							className={isList ? "icon active" : "icon"}
							onClick={() => setIsList((il) => !il)}
						/>
					</div>
				</div>
				<div className="song-info_bot">
					<p className="lyrics">
						{formatText(`[Produced by Fraser T. Smith] [Verse 1] I let it fall,
						my heart And as it fell, you rose to claim it It was
						dark, and I was over Until you kissed my lips and you
						saved me My hands, they were strong But my knees were
						far too weak To stand in your arms Without falling to
						your feet [Pre-Chorus] But there's a side to you That I
						never knew, never knew All the things you'd say They
						were never true, never true And the games you'd play You
						would always win, always win [Chorus] But I set fire to
						the rain Watched it pour as I touched your face Well, it
						burned while I cried 'Cause I heard it screamin' out
						your name Your name [Verse 2] When I lay with you I
						could stay there, close my eyes Feel you here forever
						You and me together, nothing is better [Pre-Chorus]
						'Cause there's a side to you That I never knew, never
						knew All the things you'd say They were never true,
						never true And the games you'd play You would always
						win, always win [Chorus] But I set fire to the rain
						Watched it pour as I touched your face Well, it burned
						while I cried 'Cause I heard it screamin' out your name
						Your name I set fire to the rain And I threw us into the
						flames When we fell, somethin' died 'Cause I knew that
						that was the last time The last time [Bridge] Sometimes,
						I wake up by the door That heart you caught must be
						waitin' for you Even now, when we're already over I
						can't help myself from lookin' for you [Chorus] I set
						fire to the rain Watched it pour as I touched your face
						Well, it burned while I cried 'Cause I heard it
						screamin' out your name Your name I set fire to the rain
						And I threw us into the flames When we fell, somethin'
						died 'Cause I knew that that was the last time The last
						time [Outro] Oh Oh, no Let it burn Oh Let it burn Let it
						burn`)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Song;
