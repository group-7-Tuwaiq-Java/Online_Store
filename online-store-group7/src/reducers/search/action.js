export const SearchAction = (searchText) => {
  return {
    type: "GET_SEARCH_WORD",
    payload: searchText,
  };
};
