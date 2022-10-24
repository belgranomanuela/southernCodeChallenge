import MainPage from "./Components/MainPage/MainPage.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Filters from "./Components/Filters/Filters.jsx";
import Pagination from "./Components/Pagination/Pagination.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const nasaBasePath = process.env.REACT_APP_NASA_API_URL;

function App() {
	const [photos, setPhotos] = useState([]);
	const [filters, setFilters] = useState({
		camera: "",
		rover: "curiosity",
		earth_date: moment().format("YYYY-MM-DD"),
		sol_date: null,
	});
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		const cameraParam = filters.camera ? `&camera=${filters.camera}` : "";
		const dateParam = filters.sol_date
			? `&sol=${filters.sol_date}`
			: `&earth_date=${filters.earth_date}`;
		const nasaUrl = `${nasaBasePath}/${filters.rover}/photos?page=${pageNumber}${dateParam}${cameraParam}&api_key=${nasaApiKey}`;
		try {
			axios.get(nasaUrl).then((response) => {
				setPhotos(response.data.photos);
			});
		} catch (error) {
			alert(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		filters.earth_date,
		filters.rover,
		filters.camera,
		filters.sol_date,
		pageNumber,
		nasaApiKey,
	]);

	return (
		<div className="App">
			<MainPage />
			<Filters filters={filters} setFilters={setFilters} />
			<Gallery photos={photos} />
			<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
			<Footer />
		</div>
	);
}

export default App;
