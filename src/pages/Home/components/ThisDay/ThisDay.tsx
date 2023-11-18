import { GlobalSvgSelector } from 'src/assets/icons/global/globalSvgSelector';
import s from './ThisDay.module.sass';
import { useCustomSelector } from 'src/hooks/store';

export const ThisDay = () => {
	const { weather } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	console.log(weather.data.main.temp);

	return (
		<div className={s.this__day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.this__temp}>
						{Math.trunc(weather.data.main.temp - 273)} °C
					</div>
					<div className={s.this__day_name}>Сегодня</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={s.bottom_block}>
				<div className={s.this__time}>
					Время:
					<span> 21:53</span>
				</div>
				<div className={s.this__city}>
					Город:
					<span> {weather.data.name}</span>
				</div>
			</div>
		</div>
	);
};
