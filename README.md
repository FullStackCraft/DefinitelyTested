# DefinitelyTested

The repository for high quality mock definitions.

Why DefinitelyTested? See [this blog post](https://chrisfrew.in/blog/a-production-ready-jest-setup-for-react-native-all-mocks/).

## Get Started

Currently, there are mocks only for `jest` it's expected that other frameworks like `mocha` will soon be added to this repository. Additionally, only the [`react-native`](./mocks/jest/react-native) folder actually has mocks in it - more coming soon!

Explore the various `mock.ts` files and take them as needed. In the case of `jest`, simply copy and past them into your `jest.setup.js` file!

That's it! Enjoy getting your tests to run without pulling out your hair anymore!

## TODOs

- Figure out a way to 'install' the mocks (instead of having to copy and paste them), similar to how types are installed through DefinitelyTyped, i.e. `npm install --save-dev @mocks/react-native-notifications`