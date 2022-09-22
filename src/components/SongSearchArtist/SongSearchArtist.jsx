function SongSearchArtist({ bio }) {
  return (
    <div>
      <article className="grid-1-2">
        <div>
          <h2>{bio.artists[0].strArtist}</h2>
          <img src={bio.artists[0].strArtistThumb} alt="" />
          <p>
            {bio.artists[0].intBornYear} -{" "}
            {bio.artists[0].intDieYear || "Presente"}
          </p>
          <p>pais: {bio.artists[0].strCountry}</p>
          <p>genero; {bio.artists[0].strGenre}</p>
          {bio.artists[0].strWebsite && (
            <a
              href={bio.artists[0].strWebsite}
              target="_blank"
              rel="noreferrer"
            >
              web
            </a>
          )}
        </div>
        <div>
          <blockquote style={{ whiteSpace: "pre-wrap" }}>
            {bio.artists[0].strBiographyEN}
          </blockquote>
        </div>
      </article>
    </div>
  );
}

export default SongSearchArtist;
