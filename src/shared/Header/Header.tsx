import { GlobalSvgSelector } from 'src/assets/icons/global/globalSvgSelector';
import s from '../../css/Header.module.css';
import Select from 'react-select';

export const Header = () => {
	const options = [
		{ value: 'city-1', label: 'Санкт-Петербург' },
		{ value: 'city-2', label: 'Москва' },
		{ value: 'city-3', label: 'Новгород' }
	];
	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 'rgba(71,147,255,0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100
		})
	};

	return (
		<div className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>Weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme}>
					<GlobalSvgSelector id='change_theme' />
				</div>
				<Select
					defaultValue={options[0]}
					styles={colourStyles}
					options={options}
				/>
			</div>
		</div>
	);
};