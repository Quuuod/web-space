'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FeedBack } from './FeedBack/FeedBack';

import styles from './YMap.module.css';

export const YMap = () => {
	return (
		<YMaps query={{ apikey: '5d7a2557-01e7-4e6a-acc4-7832e9e4c79c' }}>
			<div className={styles.container}>
				<Map
					width={'100%'}
					state={{
						center: [52.093754, 23.685107],
						zoom: 15,
						controls: ['searchControl', 'fullscreenControl', 'routeEditor'],
					}}
					modules={[
						'control.SearchControl',
						'control.FullscreenControl',
						'control.RouteEditor',
					]}
					style={{ filter: 'brightness(0.85)', height: '544px' }}
				>
					<Placemark defaultGeometry={[52.093754, 23.685107]} />
				</Map>
				<FeedBack />
			</div>
		</YMaps>
	);
};
