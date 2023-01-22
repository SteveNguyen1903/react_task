import React from 'react';
import { useState } from 'react';

const FeatureCardImg = ({ title, img, imgClickHandler }) => {
	const handleClick = () => {
		imgClickHandler(img);
	};

	return (
		<div className={`flex flex-row p-6 rounded-[20px] feature-card cursor-pointer`} onClick={handleClick}>
			<div className="flex-1 flex flex-col">
				<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
			</div>
		</div>
	);
};

export default FeatureCardImg;
