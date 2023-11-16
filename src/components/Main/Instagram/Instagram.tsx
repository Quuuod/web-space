import { Post } from './Post/Post';

import styles from './Instagram.module.css';

export const Instagram = ({ data }: { data: any }) => {
	const processedData = data.slice(0, 8);
	return (
		<div className={styles.container}>
			{processedData.map((element: any) => {
				return <Post src={element.url} key={element.id} />;
			})}
		</div>
	);
};
