import styles from './Slide.module.css';

interface SlideProps {
	number: number;
	title: string;
	text: string;
	caption: string;
}

export const Slide = ({ number, title, text, caption }: SlideProps) => {
	return (
		<div className={styles.slide}>
			<div className={styles.up}>
				<div className={styles.number}>
					<span>{number}</span>
				</div>
				<div className={styles.description}>
					<h5>{title}</h5>
					<span>{text}</span>
				</div>
			</div>
			<div className={styles.down}>{caption}</div>
		</div>
	);
};
