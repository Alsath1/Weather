import { ReactNode, useState } from 'react';
import { Theme } from 'src/context/ThemeContext';
import { ChangeCssRootVariables } from 'src/model/ChangeCssRootVariables';
import { storage } from 'src/model/Storage';
import { ThemeContext } from 'styled-components';

interface Props {
	children: ReactNode;
}

export const ThmeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = useState<Theme>(
		storage.getItem('theme') || Theme.DARK
	);
	ChangeCssRootVariables(theme);
	const changeTheme = (theme: Theme) => {
		storage.setItem('theme', theme);
		setTheme(theme);
		ChangeCssRootVariables(theme);
	};
	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	);
};
