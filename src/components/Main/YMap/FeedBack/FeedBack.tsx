import styles from './Feedback.module.css';
import Image from 'next/image';
import checkMarkSrc from './images/checkMark.png';
import marker from './images/marker.png';
import { useState } from 'react';

export const FeedBack = () => {
	const [checked, setChecked] = useState(false);

	const handleClick = () => {
		setChecked(!checked);
	};

	return (
		<div className={styles.feedback}>
			<div className={styles.container}>
				<p className={styles.title}>Обратный звонок</p>
				<input
					className={styles.input}
					type='text'
					name=''
					id=''
					placeholder='Ваше имя'
				/>
				<input
					className={styles.input}
					type='text'
					name=''
					id=''
					placeholder='Номер телефона'
				/>
				<div className={styles.agreement}>
					<div className={styles.inputContainer}>
						<input
							className={styles.checkbox}
							type='checkbox'
							name='c'
							id='c'
							checked={checked}
						/>
						<label htmlFor='c'>
							<Image
								onClick={handleClick}
								className={styles.checkMark}
								src={checkMarkSrc}
								alt=''
								role='presentation'
								width={56}
								height={56}
							/>
						</label>
						<Image
							onClick={handleClick}
							className={styles.marker}
							src={marker}
							alt=''
							role='presentation'
							width={56}
							height={56}
						/>
					</div>
					<span className={styles.text}>
						Согласие на обработку персональных данных
					</span>
				</div>
				<div className={styles.send}>
					<span className={styles.sendText}>Отправить →</span>
				</div>
			</div>
		</div>
	);
};
