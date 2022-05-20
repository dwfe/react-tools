import {Subscription} from '@do-while-for-each/rxjs';
import React from 'react';
import {handleObsState} from './handleObsState';
import {StateSource} from './contract';

export function obsState(component: React.Component, src: StateSource): void {
  const subscriptions: Subscription[] = [];

  const didMountFn = component.componentDidMount;
  component.componentDidMount = () => {
    subscriptions.push(
      ...handleObsState(src, state => component.setState(state))
    );
    didMountFn?.call(component);
  };

  const willUnmountFn = component.componentWillUnmount;
  component.componentWillUnmount = () => {
    willUnmountFn?.call(component);
    subscriptions.forEach(x => x.unsubscribe());
  };

}
