# Proyect stack

- TypeScript
- React-native (cli)
- React-navigation
- Axios
- React-query
- Reanimated 2
- React-testing-library

## Demo

<img src="https://raw.githubusercontent.com/rokkoo/opositaTest/main/demo/ios.png" alt="iOS demo" width="400" height="225" />
[iOS video demo](https://www.veed.io/view/081d4e65-89c1-4649-9db8-2bfb1f805fa5)

<img src="https://raw.githubusercontent.com/rokkoo/opositaTest/main/demo/android.png" alt="Android demo" width="400" height="225" />
[Android video demo](https://veed.io/view/111fba2d-9989-4fe5-9912-c17b096e822c)

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

Before everything run

```bash
yarn ios:setup
```

this step is needed just for the first time

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Project structure

This is a brief overview of the project structure. The structure is organized into several main directories, each serving a specific purpose:

## Features

The features directory contains the different features or modules of the app. Each feature typically includes commons or flows

This helps in organizing the codebase by keeping related functionality together.

## Helpers

The helpers directory holds utility functions and helper modules that can be used across different parts of the app. These functions are generally independent of any specific feature and can be shared and reused.

## Navigation

The navigation directory is responsible for handling the app's navigation. It includes files for setting up navigation stacks, routes, and navigators. It helps in managing the navigation flow between different screens and features.

## QueryClientWrapper

The queryClientWrapper directory is specific to projects using react-query. It contains the configuration and setup for the queryClient used in data fetching and caching.

## Services

The services directory contains modules for interacting with external services or APIs. These modules are responsible for making API requests and processing responses from external services.

## Stores

The stores directory is used for state management in the app.

## Theme

The theme directory holds files related to the app's theme and styling. It may include colors, fonts, and other assets related to the app's appearance.
