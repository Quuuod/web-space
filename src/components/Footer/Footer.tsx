import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.completed}>
					<p>Выполнил</p>
					<h6>Марков Роман</h6>
				</div>

				<div className={styles.phone}>
					<p>Телефон</p>
					<a href='https://t.me/+375292087156'>
						<h6>+375 (29) 208-71-56</h6>
					</a>
				</div>
			</div>
		</footer>
	);
};
