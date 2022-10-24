import React from "react";
import "./Gallery.scss";

const Gallery = ({ photos }) => {
	return (
		<div className="galleryWrapper">
			{photos.length > 0 ? (
				photos.map((photo, index) => {
					return (
						<div key={index} className="imageWrapper">
							<img src={photo.img_src} alt="NASA" className="galleryImage" />
						</div>
					);
				})
			) : (
				<div className="noPhotosLegend">No photos today!</div>
			)}
		</div>
	);
};

export default Gallery;
