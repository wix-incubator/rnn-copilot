# rnn-copilot

An abstraction on top react-native-navigation with simplified, opinionated API

## API

### Components

- [App](#app)
- [Root](#root)
- [TopBar](#topbar)
- [StatusBar](#statusbar)
- [StaticOptions](#staticoptions)
- [BottomTab](#bottomtab)

### App
A singleton that handles App actions

```
const app = new App()
  .withTopBar({noBorder: true, backButton: {icon: backIcon, color: 'black'}})
  .withLayout({componentBackgroundColor: 'grey'});
```

#### `withStatusBar(statusBarOptions: OptionsStatusBar)`
Set status bar options

#### `withLayout(layoutOptions: OptionsLayout)`
Set layout options

#### `withTopBar(topBarOptions: OptionsTopBar)`
Set top bar options

#### `withBottomTabs(bottomTabsOptions: OptionsBottomTabs)`
set bottom tabs options

#### `withBottomTab(bottomTabOptions: OptionsBottomTab)`
set bottom tab options

#### `withOptions(options: Options)`
Merge options with arbitrary set of options

#### `clear()`
Clear options

#### `set()`
Set options as default app style

### Root
A singleton that handles Root actions

```
import {Root} from 'rnn-copilot';

Root.withBottomTab(...).withBottomTab(..).set();
// Or
Root.clear().withSingleStack('mainScreen').set();
```

#### `withSingleStack(mainScreen: string | string[])`
Set a single stack layout with a main screen or with a stack of screens

#### `withBottomTab(bottomTab: BottomTab)`
Add a single bottom tab to root layout

#### `withProps(passProps?: object | object[])`
Pass props to the main screen  
Pass an array of props in case you want to pass to a stack of screens

#### `withOptions(options?: Options | Options[])`
Pass options to the main screen
Pass an array of options in case you want to pass to a stack of screens

#### `clear()`
Clear current layout settings in order to start a new one

#### `set()`

Set root with current layout configuration

#### `changeTab(tabId: string)`
Manually change selected tab

### TopBar

```
import {TopBar} from 'rnn-copilot';

new TopBar().
  .withTitle('title', {color: 'red'})
  .withSubtitle(subtitle, {color: 'red'})
  .update();
```

#### `update()`
Executes RNN mergeOption API

#### `withBackground(color?: string, options?: OptionsTopBar['background'])`
Change top bar's background color. pass options for advanced configuration

#### `withTitle(title: string, options)`
Updates title text with support for passing customizable options

#### `withSubtitle(subtitle: string, options)`
Updates subtitle text with support for passing customizable options

#### `withVisibility(visible: boolean)`
Updates top bar visibility

#### `withAnimation(animate: boolean)`
Should next update be animated

#### `withTransparency(transparent: boolean)`
Toggle top bar transparency where content is drawn behind

#### `withLeftButton(button: OptionsTopBarButton)`
Add a single left button (pushes to existing buttons)

#### `withLeftButtons(buttons: OptionsTopBarButton[])`
Set multiple left buttons

#### `withRightButton(button: OptionsTopBarButton)`
Add a single right button (pushes to existing buttons)

#### `withRightButtons(buttons: OptionsTopBarButton[])`
Set multiple right buttons

#### `setRightButton(buttonIndex: number, options: OptionsTopBarButton)`
Update a specific right button

### StatusBar 
```
import {StatusBar} from 'rnn-copilot';

new StatusBar(componentId).withBackground('red')
```

#### `withComponentId(componentId: string)`
Set component id where the status should update

#### `withVisibility(value: boolean)`
Set status bar visibility

#### `withTransparency(transparent: boolean)`
Set status bar transparency

#### `withBackgroundColor(color: string)`
Set status bar background color

#### `withDarkScheme(useDarkScheme: booolean)`
Set status bar style with dark/light scheme

### StaticOptions
```
import {StaticOptions} from 'rnn-copilot';

class MyScreen extends React.Component {
  static options() {
    return (
      new StaticOptions()
        .withTopBar(new TopBar().withTitle('My Screen'))
        .get()
    );
  }
}
```

#### `withTopBar(topBar: TopBar)`
Set a topBar using the TopBar class

#### `withStatusBar(statusBar: StatusBar)`
Set a statusBar using the StatusBar class

#### `get()`
Returns the static options object


### BottomTab

```
import {BottomTab} from 'rnn-copilot';

new BottomTab(tabId, screenId).withLabel(tabLabel)
```

#### `withLabel(label: string)`
Set tab label

#### `get()`
Retrieve (RNN) layout object



## Roadmap

- Setup a build in CI 
- Create a StaticOptions component that combines all options
- Support showing loader as right button (there's an issue)
- Support easier ways to set app default styles for common behaviors

## Know Issues

- dismissing a pageSheet modal on iOS doesn't trigger didAppear event which breaks our push functionality.
- After setting a custom right button (loader) - mergeOptions stops working completely
- StatusBar update doesn't work on iOS
- iOS - TopBar withBorder doesn't work when using update
