import {Component} from 'react';
import {EventSubscription, Navigation, NavigationComponentListener} from 'react-native-navigation';

export type EventsListener = NavigationComponentListener;

export default class Events {
  originComponentId: string;
  _eventSubscription: EventSubscription | null;

  constructor(componentId: string) {
    this.originComponentId = componentId;
    this._eventSubscription = null;
  }
  withBindAllEvents(component: Component, componentId?: string) {
    this._eventSubscription = Navigation.events().bindComponent(component, componentId);
    return this;
  }
  withEvents(eventsListener: EventsListener) {
    this._eventSubscription = Navigation.events().registerComponentListener(eventsListener, this.originComponentId);
    return this;
  }
  clean() {
    if (this._eventSubscription) {
      this._eventSubscription.remove();
      this._eventSubscription = null;
    }
  }
}
