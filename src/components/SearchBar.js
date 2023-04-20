import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleForm}>
        <input
          className="search-input"
          value={term}
          onChange={handleChange}
          placeholder="Type a city"
        />
      </form>
    </div>
  );
}
export default SearchBar;
