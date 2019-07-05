import memoize from 'fast-memoize';
import { ApplicationState } from '../..';

const getRepositoriesSlow = (state: ApplicationState) =>
  state.getIn(['products', 'data']).toJS();

export const getData = memoize(getRepositoriesSlow);
