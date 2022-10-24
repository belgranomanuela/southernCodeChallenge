import React from "react";
import "./Pagination.scss";

const Pagination = ({ pageNumber, setPageNumber }) => {
	return (
		<div className="PaginationWrapper">
			<button
				className="PaginationButton"
				onClick={() => {
					setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
				}}
			>
				{"<"} Previous
			</button>
			<div className="CurrentPage">{pageNumber}</div>
			<button
				className="PaginationButton"
				onClick={() => {
					setPageNumber(pageNumber + 1);
				}}
			>
				Next {">"}
			</button>
		</div>
	);
};
export default Pagination;
