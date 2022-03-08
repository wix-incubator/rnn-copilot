import {Component} from 'react';
import {Navigation, NavigationComponentListener} from 'react-native-navigation';

export type EventsListener = NavigationComponentListener;

export default class Events {
  originComponentId: string;

  constructor(componentId: string) {
    this.originComponentId = componentId;
  }
  withBindAllEvents(component: Component, componentId?: string) {
    Navigation.events().bindComponent(component, componentId);
    return this;
  }
  withEvents(eventsListener: EventsListener) {
    Navigation.events().registerComponentListener(eventsListener, this.originComponentId);
    return this;
  }
}
