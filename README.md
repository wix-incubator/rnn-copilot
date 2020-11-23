# rnn-simple
An abstraction on top react-native-navigation with simplified API

## API

### Components
- [App](#app)
- [Root](#root)
- [TopBar](#topbar)
- [BottomTab](#bottomtab)


### App
```
const app = new App()
  .withTopBar({noBorder: true, backButton: {icon: backIcon, color: 'black'}})
  .withLayout({componentBackgroundColor: 'grey'});
```
#### `withStatusBar(statusBarOptions: OptionsStatusBar)`
#### `withLayout(layoutOptions: OptionsLayout)`
#### `withTopBar(topBarOptions: OptionsTopBar)`
#### `withBottomTabs(bottomTabsOptions: OptionsBottomTabs)`
#### `withBottomTab(bottomTabOptions: OptionsBottomTab)`
#### `withModalPresentationStyle(presentation: OptionsModalPresentationStyle)`
#### `set()`

### Root
A singleton that handles root actions 
```
import {Root} from 'rnn-simple';

Root.withBottomTab(...).withBottomTab(..).set();
// Or
Root.clear().withSingleStack('mainScreen').set();
```

#### `withSingleStack(mainScreen: string)`  
Set a single stack layout with a main screen

#### `withBottomTab(bottomTab: BottomTab)`  
Add a single bottom tab to root layout

####  `clear()`  
Clear current layout settings in order to start a new one

#### `set()`  
Set root with current layout configuration

#### `changeTab(tabId: string)`  
Manually change selected tab


### TopBar
```
import {TopBar} from 'rnn-simple';

new TopBar().
  .withTitle('title', {color: 'red'})
  .withSubtitle(subtitle, {color: 'red'})
  .update();
```

#### `update()`  
Executes RNN mergeOption API

#### `withTitle(title: string, options)`  
Updates title text with support for passing customizable options

#### `withSubtitle(subtitle: string, options)`  
Updates subtitle text with support for passing customizable options

#### `withVisibility(visible: boolean)`  
Updates top bar visibility

#### `withAnimation(animate: boolean)`  
Should next update be animated

#### `withTransparency()`  
Set a transparent top bar where content is drawn behind

#### `withRightButton(button: OptionsTopBarButton)`  
Add a single right button (pushes to existing buttons)

#### `withRightButtons(buttons: OptionsTopBarButton[])`  
Add a multiple right button

#### `setRightButton(buttonIndex: number, options: OptionsTopBarButton)`  
Update a specific right button

### BottomTab
```
import {BottomTab} from 'rnn-simple';

new BottomTab(tabId, screenId).withLabel(tabLabel)
```
#### `withLabel(label: string)`  
Set tab label

#### `get()`  
Retrieve (RNN) layout object 


## Roadmap
- Come up with a better name than rnn-simple
- Publish this library as an NPM package
- Support showing loader as right button
- Support manipulating specific top bar button (e.g. change disability)
- Separate docs pages into each component folder
- Support easier ways to set app default styles for common behaviors

## Know Issues
- dismissing a pageSheet modal on iOS doesn't trigger didAppear event which breaks our push functionality. 
- After setting a custom right button (loader) - mergeOptions stops working completely
