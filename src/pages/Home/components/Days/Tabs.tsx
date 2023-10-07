import s from '../../../../css/Days.module.css';

export const Tabs = () => {
	const tabs = [
		{
			value: 'На неделю'
		},
		{
			value: 'На 10 дней'
		},
		{
			value: 'На месяц'
		}
	];
	return (
		<div className={s.tabs}>
			<div className={s.tabs__wrapper}>
				{tabs.map(tab => (
					<div className={s.tab + ' ' + s.active} key={tab.value}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	);
};
