const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      className="search"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
};

export default SearchBar;