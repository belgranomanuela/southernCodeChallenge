import React from "react";
import "./Filters.scss";

const Filters = ({ filters, setFilters }) => {
	return (
		<div className="FiltersWrapper">
			<div className="Filters">
				<div className="Filter">
					<label htmlFor="Rover" className="FilterTitle">
						Rover
					</label>
					<select
						name="Rover"
						id="Rover"
						value={filters.rover}
						onChange={(e) => {
							setFilters({ ...filters, rover: e.target.value });
						}}
					>
						<option value="curiosity">Curiosity</option>
						<option value="opportunity">Opportunity</option>
						<option value="spirit">Spirit</option>
					</select>
				</div>
				<div className="Filter">
					<label className="FilterTitle">Camera</label>
					<select
						name="camera"
						value={filters.camera}
						onChange={(e) => setFilters({ ...filters, camera: e.target.value })}
					>
						<option value="">All</option>
						<option value="fhaz">Front Hazard Avoidance Camera</option>
						<option value="rhaz">Rear Hazard Avoidance Camera</option>
						<option value="navcam">Navigation Camera</option>
						<option value="pancam">Panoramic Camera</option>
						<option value="minites">
							Miniature Thermal Emission Spectrometer (Mini-TES)
						</option>
						<option value="entry">Entry, Descent, and Landing Camera</option>
					</select>
				</div>
				<div className="Filter">
					<label className="FilterTitle">Earth Date</label>
					<input
						type="date"
						name="earth_date"
						value={filters.earth_date}
						onChange={(e) =>
							setFilters({ ...filters, earth_date: e.target.value })
						}
						className="FilterInput"
					/>
				</div>
				<div className="Filter">
					<label className="FilterTitle">Martian Sol Date</label>
					<input
						type="number"
						name="sol"
						value={filters.sol_date}
						onChange={(e) =>
							setFilters({ ...filters, sol_date: e.target.value })
						}
						className="FilterInput"
					/>
				</div>
			</div>
		</div>
	);
};
export default Filters;
