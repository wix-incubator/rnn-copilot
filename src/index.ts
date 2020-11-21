import {getVisibleComponentId} from './AppStack';
import {PushAction, TopBarAction} from './actions';

export function push(screenName: string) {
  const currentComponentId = getVisibleComponentId();
  return new PushAction(currentComponentId, screenName);
}

export function updateTopBar() {
  const currentComponentId = getVisibleComponentId();
  return new TopBarAction(currentComponentId);
}
