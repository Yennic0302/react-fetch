import ClientMessage from "../ClientMessage/ClientMessage";
import SongSearchArtist from "../SongSearchArtist/SongSearchArtist";

function SongSearchDetails({ search, bio }) {
  if (!bio) return null;

  if (bio.name === "AbortError") {
    return (
      <ClientMessage
        msg={`<em> el servidor no responde</em> `}
        bgColor="#dc3545"
      />
    );
  } else {
    return (
      <>
        {!bio.artists || bio.err ? (
          <ClientMessage
            msg={`no se encuentra el artista <em> ${search.artistName}</em>`}
            bgColor="#dc3545"
          />
        ) : (
          <SongSearchArtist bio={bio} />
        )}
      </>
    );
  }
}

export default SongSearchDetails;
