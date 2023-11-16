import styles from './Post.module.css';

export const Post = ({ src }: { src: string }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img className={styles.img} src={src} />
				<div className={styles.text}>Пишите ваши вопросы в комментарии</div>
			</div>
		</div>
	);
};
