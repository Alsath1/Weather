import s from './Days.module.sass';
import { Card } from './Card';
import { Tabs } from './Tabs';

export interface Day {
	id: number;
	day: string;
	day_info: string;
	icon_id: string;
	temp_day: string;
	temp_night: string;
	info: string;
}

export const Days = () => {
	const days: Day[] = [
		{
			id: 1,
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно'
		},
		{
			id: 2,
			day: 'Завтра',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь и солнце'
		},
		{
			id: 3,
			day: 'Ср',
			day_info: '30 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь'
		},
		{
			id: 4,
			day: 'Чт',
			day_info: '28 авг',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно'
		},
		{
			id: 5,
			day: 'Пт',
			day_info: '28 авг',
			icon_id: 'rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно'
		},
		{
			id: 6,
			day: 'Сб',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно'
		},
		{
			id: 7,
			day: 'Вс',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно'
		}
	];

	return (
		<>
			<Tabs />
			<div className={s.days}>
				{days.map((day: Day) => (
					<Card day={day} key={day.id} />
				))}
			</div>
		</>
	);
};
