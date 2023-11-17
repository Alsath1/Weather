import { useCustomDispatch } from 'src/hooks/store';
import s from './Home.module.sass';
import { Days } from './Days/Days';
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';
import { fetchCurrentWeather } from 'src/store/thunks/fetchCurrentWeather';

export const Home = () => {
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay />
				<ThisDayInfo />
			</div>
			<Days />
		</div>
	);
};
