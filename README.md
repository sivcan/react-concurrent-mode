## React concurrent mode + react-cache = UX<sup>10</sup>

This project demonstrates the power of the [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html) in react, along with usage of **react-cache** to cache the results.

The project lists *Dota 2 heroes* for the example!

**Disclaimer**: The concurrent mode is still in experimental mode, so avoid using it in production apps.


## Usage steps
1. Install the dependencies
#### `yarn install`

2. Build the app
#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Debugging
If you encounter an error **cannot read property `readContext` of undefined** then refer [this issue](https://github.com/facebook/react/issues/14575#issuecomment-455096301) for a workaround.

