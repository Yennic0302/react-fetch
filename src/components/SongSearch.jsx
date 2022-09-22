import React, { useState, useEffect } from "react";
import Loader from "./Loader/Loader";
import SongSearchDetails from "./SongSearchDetails/SongSearchDetails";
import SongSearchForm from "./SongSearchForm/SongSearchForm";
import { helpHttp } from "../helpers/helpHttp";

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [loaging, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const handleFecth = async () => {
      const { artistName } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`;

      setLoading(true);

      const [resFecthArstist] = await Promise.all([helpHttp().get(artistUrl)]);
      setLoading(false);

      setBio(resFecthArstist);
    };
    handleFecth();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>SongSearch</h2>
      <article>
        <SongSearchForm handleSearch={handleSearch} />
        {loaging && <Loader />}
        {search && !loaging && <SongSearchDetails search={search} bio={bio} />}
      </article>
    </div>
  );
}

export default SongSearch;
