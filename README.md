# Media.Monks Test Mobile

## Table of Contents

- [Objectives](#objetive)
- [Solution](#solution)
  - [User Interface](#user-interface)
  - [Global State - Redux](#global-state---redux)
  - [Persistance](#persistance)
- [Installation](#installation)
  - [iOS](#ios)
  - [Android](#android)
- [Libraries](#libraries)
- [Possible Improvements](#possible-improvements)
- [Greetings](#greetings)
  

## Objetive

Create a simple album list, photo list, and photo detail application, using data from:

https://jsonplaceholder.typicode.com. Make sure that you use Redux and persist the data so that if you close and open the app it doesn't fetch again.

Your project should be hosted on GitHub and shared with user tomasfrancomediamonks. Don't forget to add your name to your GitHub profile. 

There are no rules other than it should run (after running 'npm install') on iOS and Android, just make it cool and try to keep your commits clear!

You will be judged on things like architecture, readability, animation, git usage, design, performance, third-party usage and more.


## Solution

### User Interface
I created a minimalistic App that has 3 pages. Home Page, Album Page and Photo Page.

The Home Page has a `hand-crafted` main Carousel (where the first 5 albums are being displayed) and a list containing the rest of albums. Each one has their first photo as a preview.

The Album Page shows all the photos of a certain Album. The name of the album is being shown at the Header.

The Photo Page shows a selected photo. Header disappears after a second for a better photo visualization. Same actions is being triggered if you touch anywhere on the screen.

`Dark Mode is here!!!`
Implemented auto dark mode. The App gets the user's phone theme and changes upon the configuration. Every time the user's UI Theme changes, the app 
will change the theme too. It works only on Android API +30 & iOS +13. Lower ones default on 'Light' theme.

### Global State - Redux

This is my first time using Redux. Previously, I used to handle minimal user's Global Context using React's API 'useContext (w/ Provider & Consumers)'. 
It is kwnown that it's not very useful with large and complex Apps. 

I' ve been reading about the redux implementation and since the App's complexity is not very high. I opted to use 
[Ducks methodolody](https://github.com/erikras/ducks-modular-redux#the-proposal) to implement `Constants, Actions & Reducers`.


### Persistance

In order to handle the persistance, I have used `React Native Async-Storage`.

The first time that the user opens the App, it checks if there are stored values. If not, it fetches `https://jsonplaceholder.typicode.com/` API to get the 
Albums & Photos.

`photos & album` keys where used. Each one contains the corresponding values.

If you want to delete the persistent data, you could """TODO""". The next time that you open the app, it will fetch the API again.


## Installation
iOS version of the App not tested due to not having a Mac. Certain libraries need some configurations.

Android App tested with `Samsung Galaxy S4 - OS: 5.0.1 - API: 21` & `Google Pixel 4a - OS: 11.0 - API: 30 [AVD]`

Run this command into the root of the proyect.

```bash
npm install
```

React-Native 0.60+ has automatic linking.

### Android

No more further configurations needed.

### iOS

Handle with care. I have not tested the iOS version or the CocoaPods linking.

Some libraries need the usage of [CocoaPods](https://cocoapods.org/) to complete the linking.

`React Navigation`
```bash
npx pod-install ios
```

`React Native Async-Storage`
```bash
npx pod-install
```

See the Oblador's iOS's `react-native-vector-icons` installation [here](https://github.com/oblador/react-native-vector-icons#ios).

## Libraries
- [React Navigation](https://reactnavigation.org/)
- [React Native Async-Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)

## Possible Improvements

As the App grows and handles more photos, it could be useful a library called [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image). 

It has performance improvements over the React's Native Component 'Image'.

## Greetings

Thank you all at Media.Monks for giving me the opportunity of making this test.

By developing this project, I had the chance to introduce myself into the redux world. Lots need to be learn yet, lots will be learn.

Any feedback would be appreciated.

## License
[Media.Monks](https://media.monks.com/)
