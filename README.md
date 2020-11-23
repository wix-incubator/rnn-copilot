# rnn-simple
An abstraction on top react-native-navigation with simplified API

## API
### TopBar
```
import {TopBar} from 'rnn-simple';

new TopBar().
  .withTitle('title', {color: 'red'})
  .withSubtitle(subtitle, {color: 'red'})
  .update();
```

**update()**  
Executes RNN mergeOption API

**withTitle(title: string, options)**  
Updates title text with support for passing customizable options

**withSubtitle(subtitle: string, options)**  
Updates subtitle text with support for passing customizable options

**withVisibility(visible: boolean)**  
Updates top bar visibility

**withAnimation(animate: boolean)**  
Should next update be animated

**withTransparency()**  
Set a transparent top bar where content is drawn behind

**withRightButton(button: OptionsTopBarButton)**  
Add a single right button (pushes to existing buttons)

**withRightButtons(buttons: OptionsTopBarButton[])**  
Add a multiple right button

### BottomTab
```
import {BottomTab} from 'rnn-simple';

new BottomTab(tabId, screenId).withLabel(tabLabel)
```
**withLabel(label: string)**  
Set tab label

**get()**  
Retrieve (RNN) layout object 


### Root
```
import {Root} from 'rnn-simple';

const root = new Root();
root.withBottomTab().withBottomTab().set();
```

**withBottomTab(bottomTab: BottomTab)**  
Add a single bottom tab

## Roadmap
- Support showing loader as right button
- Support manipulating specific top bar button (e.g. change disability)
- Support setting defaults styles for all components
- Separate docs pages into each component folder
- Support easier ways to set app default styles for common behaviors

