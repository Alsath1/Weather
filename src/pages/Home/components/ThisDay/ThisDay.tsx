import { GlobalSvgSelector } from 'src/assets/icons/global/globalSvgSelector';
import s from './ThisDay.module.sass';

export const ThisDay = () => {
	return (
		<div className={s.this__day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.this__temp}>20°</div>
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
					<span> Санкт-Петербург</span>
				</div>
			</div>
		</div>
	);
};
