# LearnReact
This is my react journey


# Redux Toolkit
    - Install @redux/toolkit and react-redux
    - build our store which is provided by @redux/toolkit
    - connect our store to our app which is provided by react-redux
    - Slice (cartSlice)
    - dispatch(action)
    - Selection (subscribing to the Slice)

# Types of Testing (developer)
    - Unit Testing
    - Integration Testing
    - End To End Testing (e2e testing)

# Setting up Testing in our app
    - Install React Testing Library
    - Install jest
    - Install babel dependencies from jest
    - Configure the babel.config.js at the root level
    - Create .parcelrc file at root level
    - Configure Parcel (.parcelrc) file to disable babel transpilation
      To avoid conflict btw default and current babel configuration
    - Configure jest using npx jest --init
    - Install jsdom library
    - Create __tests__ directory any where in the folder structure
    - Install @babel/preset-react --> to make JSX work in test cases
    - Include @babel/preset-react inside in the babel config
    - Install @testing-library/jest-dom
