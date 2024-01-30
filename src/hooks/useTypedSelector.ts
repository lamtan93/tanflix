import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/reducers/index';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
