import s from './ThisDayInfo.module.sass';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { useCustomSelector } from 'src/hooks/store';

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

export const ThisDayInfo = () => {
	const { weather } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.trunc(
				weather.data.main.temp - 273
			)} ° - ощущается как ${Math.trunc(weather.data.main.feels_like - 273)}`
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${weather.data.main.pressure} мм ртутного столба`
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков'
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${weather.data.wind.speed} м/с юго-запад`
		}
	];
	return (
		<div className={s.this__day_info}>
			<div className={s.this__day_info_items}>
				{items.map((item: Item) => {
					return <ThisDayItem key={item.icon_id} item={item} />;
				})}
			</div>
			<img className={s.cloud_img} src={cloud} alt='облако' />
		</div>
	);
};
