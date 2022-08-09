import {Navigation, CommandName, ModalDismissedEvent, ComponentDidAppearEvent} from 'react-native-navigation';

let activeScreenId: string | undefined;
let overlayWasShown = false;

interface State {
  stackCounter: number;
  activeScreenId?: string;
  isActiveScreenId: (screenId: string) => boolean;
}

const state: State = {
  stackCounter: 0,
  activeScreenId: undefined,
  isActiveScreenId: (screenId: string) => screenId === activeScreenId,
};

Navigation.events().registerModalDismissedListener((event: ModalDismissedEvent) => {
  // Since Android hardware back button doesn't pass the onCommand
  let stackCounter = state.stackCounter;
  stackCounter -= event.modalsDismissed;

  // don't allow going under zero in any way
  stackCounter = Math.max(0, stackCounter);

  state.stackCounter = stackCounter;
});

Navigation.events().registerCommandListener((name) => {
  let stackCounter = state.stackCounter;

  switch (name) {
    case CommandName.ShowModal: {
      stackCounter += 1;
      break;
    }
    // This seem redundant
    /* case CommandName.DismissAllModals: {
      if (Constants.isIOS) {
        stackCounter = 0;
      }
      break;
    } */
    default:
      break;
  }

  // don't allow going under zero in any way
  stackCounter = Math.max(0, stackCounter);
  state.stackCounter = stackCounter;
});

Navigation.events().registerComponentDidAppearListener((event: ComponentDidAppearEvent) => {
  if (event.componentType === 'Component') {
    if (overlayWasShown) {
      overlayWasShown = false;
    } else {
      activeScreenId = event.componentId;
      state.activeScreenId = event.componentId;
    }
  }
});

Navigation.events().registerCommandListener((name, params) => {
  if (params.commandId && name === CommandName.ShowOverlay) {
    overlayWasShown = true;
  }
});

export default state;
