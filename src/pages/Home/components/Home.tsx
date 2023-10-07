import s from '../../../css/Home.module.css';
import { Days } from './Days/Days';
import { ThisDay } from './ThisDay/ThisDay';
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo';

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
