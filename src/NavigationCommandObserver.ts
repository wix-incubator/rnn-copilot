import {CommandName, Navigation} from 'react-native-navigation';

class NavigationCommandObserver {
  commands = {} as any;

  commandListener = Navigation.events().registerCommandListener((name, params) => {
    if (params.commandId && name in [CommandName.Push, CommandName.ShowModal, CommandName.DismissModal]) {
      this.addCommand(name, params.commandId);
    }
  });

  public onPressThrottler(onPress?: Function) {
    return (...args: any[]) => {
      if (!this.commandInProgress()) {
        onPress?.(...args);
      }
    };
  }

  private commandInProgress = () => {
    return Object.keys(this.commands).length;
  };

  private addCommand = (name: string, id: string) => {
    this.commands[id] = name;

    setTimeout(() => {
      this.removeCommand(id);
    }, 0);
  };

  private removeCommand = (id: string) => {
    delete this.commands[id];
  };
}

export default new NavigationCommandObserver();
