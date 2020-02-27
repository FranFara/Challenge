# React Native Challenge

Before downloading the repo:
- [Make sure you have React Native CLI configured](https://facebook.github.io/react-native/docs/getting-started).

## Before Running the app

#### Cloning 
On your console, run:
Inside the repo folder install the dependencies by running:
```bash
git clone https://github.com/FranFara/Challenge.git
```

#### Installing dependencies 
1. Inside the repo folder install the dependencies by running:
```bash
npm install
```

## Running the app
* Make sure you have xcode installed.
* Make sure you have android studio installed.


### Android

You need an android Emulator running, or an device connected with [developer options enabled](https://developer.android.com/studio/debug/dev-options).

On the project folder do:
1. npx react-native run-android


## Dependencies & Libraries

All the dependencies added to the project are:

Needed for navigation:
- `@react-native-community/masked-view`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-navigation`
- `react-navigation-stack`  


As it was requested in the requirements I used `redux`/`react-redux` and `redux-thunk`: To be able to make asynchronous dispatches of actions, in this way I was able to call the api and dispatch the received data.  


## How the list can be more performant if has to manage a big amount of data?

Avoid extra rendering of the list items by usign `PureComponent` and not breaking its principles, avoiding conditional rendering.