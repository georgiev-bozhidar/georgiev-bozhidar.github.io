interface CodeProps {
  imagePath: string;
  imageAlt?: string;
  projectName?: string;
  projectDescription?: string;
}

export function Code({
  imagePath,
  imageAlt,
  projectName = "Project Name",
  projectDescription = "A short description of the project.",
}: CodeProps) {
  return (
    <>
      <div className="project code">
        <img src={imagePath} alt={imageAlt} />
        <div className="project-text">
          <h4>{projectName}</h4>
          <p>{projectDescription}</p>
        </div>
      </div>
    </>
  );
}

interface ArtProps {
  imagePath: string;
  imageAlt?: string;
  artName?: string;
}

export function Art({ imagePath, imageAlt, artName }: ArtProps) {
  return (
    <div className="project art">
      <img src={imagePath} alt={imageAlt} />
      {artName ? <h4>{artName}</h4> : null}
    </div>
  );
}

interface MusicProps {
  imagePath?: string;
  imageAlt?: string;
  musicPath?: string;
  artistName: string;
  musicName: string;
}

export function Music({
  imagePath,
  imageAlt,
  musicPath,
  artistName,
  musicName,
}: MusicProps) {
  return (
    <>
      <div className="project music">
        <div className="music-image">
          <img src={imagePath} alt={imageAlt} />
        </div>
        <div className="music-main">
          <div className="music-text">
            <h4>{artistName}</h4>
            <p>{musicName}</p>
          </div>
          {musicPath == null ? (
            <audio
              controls
              src={"/audio/" + artistName + " - " + musicName + ".mp3"}
            ></audio>
          ) : (
            <audio controls src={musicPath}></audio>
          )}
        </div>
      </div>
    </>
  );
}
