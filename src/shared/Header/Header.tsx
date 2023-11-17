import { GlobalSvgSelector } from 'src/assets/icons/global/globalSvgSelector';
import s from './Header.module.sass';
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useCustomDispatch } from 'src/hooks/store';
import { fetchCurrentWeather } from 'src/store/thunks/fetchCurrentWeather';

export const Header = () => {
	const options = [
		{ value: 'city-1', label: 'Санкт-Петербург', latName: 'Saint Petersburg' },
		{ value: 'city-2', label: 'Москва', latName: 'Moscow' },
		{ value: 'city-3', label: 'Новгород', latName: 'Veliky Novgorod' }
	];
	const [stateSelector, SetstateSelector] = useState(options[0].latName);

	const theme = useTheme();

	const dispatch = useCustomDispatch();
	dispatch(fetchCurrentWeather(stateSelector));

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor:
				theme.theme === 'dark' ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === 'dark' ? '#fff' : '#000'
		})
	};

	const changeHandler = () => {
		theme.changeTheme(theme.theme === 'dark' ? 'light' : 'dark');
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
				<div className={s.change_theme} onClick={changeHandler}>
					<GlobalSvgSelector id='change_theme' />
				</div>
				<Select
					onChange={e => {
						SetstateSelector(e?.latName);
						console.log(stateSelector);
					}}
					defaultValue={options[0]}
					styles={colourStyles}
					options={options}
				/>
			</div>
		</div>
	);
};
