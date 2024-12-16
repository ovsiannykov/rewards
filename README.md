# React Native App Setup with Redux Store for Rewards

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Requirements

### 1. Basic React Native App Setup

- Use **React Native Community CLI** (not Expo).
- Set up the project with **TypeScript**.

### 2. Redux Store for Collected Rewards

- Configure a **Redux Store** to hold collected rewards data.
- Implement the following:
  - **Action:** `COLLECT_REWARD`
    - Accepts a reward payload.
    - Adds the reward to the list of collected rewards.

### 3. Rewards List View/Screen

- Create a screen to display a list of available rewards fetched from the **Rewards API**.
- Implement the following:
  - Handle **safe area boundaries**.
  - Optimize the list to **avoid unnecessary re-renders**.
  - Fetch new rewards when the **list end is reached**.
  - Properly handle **loading** and **error states**.

#### List Item Requirements

- Design a UI for each list item with the following elements:
  - A **"Collect" CTA button** that:
    - Dispatches the `COLLECT_REWARD` Redux action when clicked.
    - Is **not displayed** if the reward is already collected.
  - If the reward is collected:
    - Change the list item state (e.g., decrease opacity or similar visual cue).

### 4. Collected Rewards View/Screen

- Create a screen to display the list of **collected rewards**.
- Requirements:
  - Provide a way to navigate to this screen (e.g., add a button on the initial app screen).
  - Simply show the collected items (list optimization is not required).

---

## Rewards API

- Rewards data can be fetched from:  
  **`https://staging.helloagain.at/api/v1/clients/5189/bounties/`**
- The API returns a list of loyalty rewards, which typically include:
  - `name`: Name of the reward.
  - `needed_points`: Points required for the reward.
  - `pictures`: An optional list of images.
- **Note:** Filter out rewards without images for a more predictable data structure.

# Note!!!

Dear reviewer,

I think better describe my ideas and issues, that could embarrass you! I use [FSD](https://feature-sliced.design/docs), and i understand that it isn't good idea to use FSD with Redux, beacause in this case needed to have one store. Ussaly i prefer to use zustand and micro-stores in every slice. Also for don't waste the time I didn't add ENV and AsyncStorage

## How to start project

- Go to your project's root folder and run: `yarn`

- If you wiil use IOS run: `yarn run pods`

- Run `yarn run ios` or `yarn run android` to start your application!

## Commands

- `dev` - React Native start with `--reset-cache`
- `pods` - IOS pods install
- `android` - run Android
- `ios` - run IOS
- `android-release` - run Android in release mode
- `ios-release` - run IOS in release mode
- `clean-android` - clean Android builds
- `android-bundle` - build Android bundle
- `build-android-release-apk` - build Android .apk file in release mode
- `build-android-debug-apk` - build Android .apk file in debug mode
- `build-android-aab` - build Android .apk file for uploading to Play Market
