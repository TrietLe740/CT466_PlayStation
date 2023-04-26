import { Link } from "react-router-dom";
import "./searchresult.css";

function SearchResult({ searchValue, type }) {
  const slug =
    type === "new"
      ? `/news/${searchValue._id}`
      : `/product/${type}/${searchValue._id}`;

  return (
    <tr className="searchLine">
      <Link to={slug}>{searchValue.name || searchValue.title}</Link>
    </tr>
  );
}

export default SearchResult;
