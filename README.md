# rnn-simple
An abstraction on top react-native-navigation with simplified API

## API
### TopBar Actions

```
import {updateTopBar} from 'rnn-simple';

updateTopBar()
  .withTitle('title', {color: 'red'})
  .withSubtitle(subtitle, {color: 'red'})
  .go();
```

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
