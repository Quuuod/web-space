'use client';

import { useState } from 'react';
import { Slide } from './Slide/Slide';

import styles from './Slider.module.css';

export const Slider = () => {
	const [offset, setOffset] = useState('0');

	const handleFirstSlide = () => {
		setOffset('0');
	};
	const handleSecondSlide = () => {
		setOffset('-372px');
	};
	const handleThirdSlide = () => {
		setOffset('-744px');
	};
	return (
		<div className={styles.slider}>
			<div className={styles.slides}>
				<div
					className={styles.slidesContainer}
					style={{
						transform: `translateY(${offset})`,
					}}
				>
					<Slide
						number={5}
						title={'Оценка дизайнеру:'}
						text={'Мне понравилось. Дизайнер заслужил покушать.'}
						caption={'Красиво'}
					/>
					<Slide
						number={2}
						title={'Сложность задания:'}
						text={'Как Dark Souls в 10 раз.'}
						caption={'звезды'}
					/>
					<Slide
						number={14}
						title={'Потребовалось на тестовое задание:'}
						text={'С учётом 5 часов просмотра индусов на YouTube...'}
						caption={'часов'}
					/>
				</div>
			</div>
			<div className={styles.slideSelector}>
				<div className={styles.radio}>
					<input
						type='radio'
						className={styles.checkbox}
						name='r'
						id='r1'
						defaultChecked
					/>
					<label htmlFor='r1' onClick={() => handleFirstSlide()}></label>

					<input type='radio' className={styles.checkbox} name='r' id='r2' />
					<label htmlFor='r2' onClick={() => handleSecondSlide()}></label>

					<input type='radio' className={styles.checkbox} name='r' id='r3' />
					<label htmlFor='r3' onClick={() => handleThirdSlide()}></label>
				</div>
			</div>
		</div>
	);
};
