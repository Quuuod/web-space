import { Slider } from './Slider/Slider';
import { Instagram } from './Instagram/Instagram';

import styles from './Main.module.css';
import { YMap } from './YMap/YMap';

export const Main = async () => {
	const rawData = await fetch(
		'https://jsonplaceholder.typicode.com/photos'
	).then((response) => response.json());
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Slider />
				<Instagram data={rawData} />
				<YMap />
			</div>
		</main>
	);
};
