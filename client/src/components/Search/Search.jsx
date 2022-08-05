import React, { useEffect, useState } from "react";
import { useGetPhotoByName } from "../../hooks/useFetch";
import { StyledInput } from "../Form/StyledInput.style";
import { StyledSearchBar } from "./Search.style";
function Search() {
  const [searchResult, setSearchResult] = useState("");
  const mutation = useGetPhotoByName();
  useEffect(() => {
    mutation.mutate({ name: searchResult });
  }, [searchResult]);

  return (
    <>
      {" "}
      <StyledInput
        type="text"
        value={searchResult}
        onChange={(x) => setSearchResult(x.target.value)}
      />
    </>
  );
}

export default Search;
