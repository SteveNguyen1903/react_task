import React from 'react';
import { useState, useEffect } from 'react';
import { featuresApp } from '../constants';
import styles, { layout } from '../style';
import { bill, maqroLogo, maqroMobile } from '../assets';
import FeatureCardImg from './FeatureCardImg';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesApp = () => {
	const [imgBg, setImgBg] = useState(maqroMobile);

	const imgClickHandler = (img) => {
		setImgBg(img);
	};

	return (
		<section id="features-app" className="flex-col">
			<div className={`${layout.sectionImg} flex-row`}>
				{featuresApp.map((feature, index) => {
					return <FeatureCardImg key={feature.id} {...feature} index={index} imgClickHandler={imgClickHandler} />;
				})}
			</div>

			<AnimatePresence>
				<div className={layout.sectionImg}>
					<motion.img initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} src={imgBg} key={`${imgBg}`} alt={`${imgBg}`} className="w-[100%] h-[100%] relative z-[5] mt-5" />
				</div>
			</AnimatePresence>
		</section>
	);
};

export default FeaturesApp;
