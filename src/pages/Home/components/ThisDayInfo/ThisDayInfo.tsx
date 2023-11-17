import s from './ThisDayInfo.module.sass';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

export const ThisDayInfo = () => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°'
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное'
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков'
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '3 м/с юго-запад - легкий ветер'
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
