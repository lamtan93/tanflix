import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../redux/action-creators';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
