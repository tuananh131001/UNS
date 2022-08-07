import React, { useEffect, useState } from "react";
import { useGetPhotoByName } from "../../hooks/useFetch";
import { StyledSearch } from "../Form/StyledInput.style";
function Search() {
  const [searchResult, setSearchResult] = useState("");
  const mutation = useGetPhotoByName();
  useEffect(() => {
    mutation.mutate({ name: searchResult });
  }, [searchResult]);

  return (
    <>
      {" "}
      <StyledSearch
        type="text"
        value={searchResult}
        onChange={(x) => setSearchResult(x.target.value)}
        placeholder="Search by name"
      />
    </>
  );
}

export default Search;
