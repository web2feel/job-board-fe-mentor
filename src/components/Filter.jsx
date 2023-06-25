const Filter = ({ filterTags, handleFilterTags }) => {
  if (!filterTags.length) return null;
  return (
    <div className="filter">
      <div className="filterTags">
        {filterTags.map((filterTag, i) => {
          return (
            <div key={i} className="filterTag">
              <span className="tag">{filterTag}</span>
              <span
                onClick={() => handleFilterTags(filterTag, "remove")}
                className="remove"
              >
                <img src="/images/icon-remove.svg" alt="" />
              </span>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => handleFilterTags(null, "clear")}
        className="clearButton"
      >
        Clear
      </div>
    </div>
  );
};

export default Filter;
