import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';

export const useCustomDispatch = () => useDispatch<AppDispatch>();

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
