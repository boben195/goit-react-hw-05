import toast from "react-hot-toast";

const SearchBar = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;

    if (form.elements.query.value.trim() === "") {
      toast("Holly Molly!!! Put the letters into words");
      return;
    }
    onAdd(query);
    form.reset();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
