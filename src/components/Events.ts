import {Component} from 'react';
import {EventSubscription, Navigation, NavigationComponentListener} from 'react-native-navigation';

export type EventsListener = NavigationComponentListener;

export default class Events {
  originComponentId: string;
  eventSubscription: EventSubscription | null;

  constructor(componentId: string) {
    this.originComponentId = componentId;
    this.eventSubscription = null;
  }
  withBindAllEvents(component: Component, componentId?: string) {
    this.eventSubscription = Navigation.events().bindComponent(component, componentId);
    return this;
  }
  withEvents(eventsListener: EventsListener) {
    this.eventSubscription = Navigation.events().registerComponentListener(eventsListener, this.originComponentId);
    return this;
  }
}
