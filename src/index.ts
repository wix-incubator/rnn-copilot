import {getVisibleComponentId} from './AppStack';
import {PushAction} from './actions';

export function push(screenName: string) {
  const currentComponentId = getVisibleComponentId();
  return new PushAction(currentComponentId, screenName);
}

export * from './components';
