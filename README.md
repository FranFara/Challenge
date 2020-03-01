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
* Make sure you have xcode installed and configured.
* Make sure you have android studio installed and configured.


### Android

On the project folder do:
1. npx react-native run-android


### iOS
On the project folder do:
1. cd ios
2. pod install
3. after installation of dependencies run: cd ..
4. npx react-native run-ios


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


## How the list can be more performant?

- Avoid additional representation of the items in the list by using `PureComponent` such as SectionList
- Increasing the number of characters to start searching