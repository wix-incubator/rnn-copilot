import {Navigation, CommandName, ModalDismissedEvent} from 'react-native-navigation';

const state = {
  stackCounter: 0,
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

export default state;
