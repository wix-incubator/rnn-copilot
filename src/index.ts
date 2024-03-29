import {PushAction} from './actions';

export function push(screenName?: string, componentId?: string) {
  return new PushAction(screenName, componentId);
}

export * from './components';
export {default as NavigationState} from './NavigationState';
export {default as NavigationCommandObserver} from './NavigationCommandObserver';
