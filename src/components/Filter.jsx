const Filter = ({ genre, setGenre }) => {
  return (
    <select
      className="filter"
      value={genre}
      onChange={(e) =>
        setGenre(e.target.value)
      }
    >
      <option value="">All Genres</option>

      <option value="Self Help">
        Self Help
      </option>

      <option value="Fiction">
        Fiction
      </option>

      <option value="Programming">
        Programming
      </option>
    </select>
  );
};

export default Filter;