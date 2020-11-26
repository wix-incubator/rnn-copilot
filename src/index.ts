import {PushAction} from './actions';

export function push(screenName?: string, componentId?: string) {
  return new PushAction(screenName, componentId);
}

export * from './components';
