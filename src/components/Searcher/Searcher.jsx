import { useState } from "react";
import "./Searcher.css";

const Searcher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Books", "Clothing", "Food"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-form">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="search-bar-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-bar-input"
        />
        <button type="button" className="search-bar-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searcher;
