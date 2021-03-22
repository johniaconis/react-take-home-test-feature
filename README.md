# Running the site locally
1. Install Node v12, to manage node versions we recommend using [nvm](https://github.com/nvm-sh/nvm)
2. [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)
3. [Install Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) - This will be incredibly helpful for learning and following the actions, and state changes.
4. Install project dependencies
    ```
    yarn install
    ```
4. Run the app
    ```
    npm start
    ```

The site should now be running at <http://localhost:8080>

# INSTRUCTIONS

You've been given a partially functioning todo list using most of the front-end technologies we use at 6sense.

- [Here](https://www.dropbox.com/sh/t5qha676hdu2094/AACn9NQAGqbsRMQLVyiVcnYka?dl=0) you will find some mocks of what it should look like and how it should function, along with some additional assets you might need.
- The todos needs the ability to be reordered. For example, the todo could have an up/down icon that can be clicked to move the todos up or down in the list. 
  
  **Note:** please do not use a drag and drop library for this.
- We should be able to sort each list (alphabetically).
- For a bonus, you could add the functionality to edit the to-dos
- Also, there is a video with some animations, and while they are not necessary - feel free to give these a shot if you want

### Kindly make the changes in a new brnach and raise a PR for us to evaluate

# Architecture

#### If you are new to react/redux

You may want to check out these articles to learn a bit more:

1. https://facebook.github.io/react/tutorial/tutorial.html 
2. https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

Read through the redux saga docs: https://github.com/redux-saga/redux-saga

Next, play around with any type of boilerplate - or play around with our own...
 
You should feel comfortable looking through things and playing.
 
#### Architectural Elements

Have a general understanding of modularizing things and DUCKS architecture:
https://github.com/erikras/ducks-modular-redux

Have an understanding of fractal architecture:
https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure

Composition vs. Inheritance... React DOES NOT support inheritance. Read this article and check out this code:
https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

[Our own HOC component](src/HOCS/LoadComponent/index.js) 

#### CSS:
Try to avoid nesting. This compiles into a lot of code. Keep things FLAT. Use variables for 
colors and font sizes. Import it as shown in this 
[example](src/components/GenericCard/GenericCard.module.scss).

Variables are stored [here](src/styles/_base.scss)

For flexbox and responsive design - try to stick to using react-flexbox-grid.  Our example app is 
using this everywhere and importing Row, and Col components. Documentation is 
[here](https://roylee0704.github.io/react-flexbox-grid/)

Need icons ?? Font awesome is included in this bundle.  Just add the appropriate class, i.e. 
`'fa fa-shower'`

#### GET TO KNOW OUR COMPONENT LIBRARY:
https://ant.design/

#### TIME TRAVEL AND REDUX DEVTOOLS:

Download the redux devtools chrome extension. This is an important tool and allows you to see 
each action dispatched, and the structure of your state.  It also allows you to rewind time or 
bring yourself back to a specific state change.

#### LINTING

You should run `npm run lint` in our example application. We do not 
accept un-linted code.

#### SELECTORS:
Selectors provide a "filter" level between your store and your component. Selectors serve to both 
"grab" a portion of the store is pertinent to a component as well any reorganization of the store.

Keep your store AS PURE AS POSSIBLE. It's your source of truth.  Don't muddle it, don't dirty it up.
 If you need to filter, search, or organize, PLEASE use reselect.  

Duplication does not belong in the store. If you need to - you can also use 
[normalizer](https://github.com/paularmstrong/normalizr).

#### Lodash

Lodash is javascript utility library. If you need to perform any sort of sorting or manipulation of 
objects and array, chances are lodash has it and will make your life much easier.
Please use curried and not the chain function.  If you use chain, it imports the entire lodash 
library, which will be non-performant.

### EXPLANATION OF OUR EXAMPLE APP:

The example app has tried to put an example for how our architecture works.  Here are things to 
understand:

#### src/Modules

These are reducers/sagas that are shared across the entire application.  You will see the user 
saga and global saga make server calls.  Unless these succeed, the application will not load and 
its children component will not show up.  Once these are finished loading, the children will get 
passed through.

#### src/Components

These are components that are re-usable across the entire application.  This example app includes many of these components and example usage.  A lot of these components are wrapping the antd library.

#### src/Components/Text

Text that is displayed to the user should always be wrapped by our text component.  We use this because it is standardized and accepts color arguments, size arguments, and weight arguments.

#### src/HOCS

The example app displays the usage of HOCs.  Please play and understand how the example app uses them.  You can find their use here and here:

- [src/routes/Todos/containers/Todos](src/routes/Todos/containers/Todos.js#L62-L66)

- [src/routes/Todos/routes/Manage/containers/TodoView.js](src/routes/Todos/routes/Manage/containers/TodoView.js#L31)

- [src/routes/Todos/routes/Manage/containers/TodoView.js](src/routes/Todos/routes/Manage/containers/TodoView.js#L187-L192)

Run the app locally, play around and understand.  You'll see there are a lot of buttons for you to play with the functionality of these HOCs (pagination, stateComponent all include loading, zero-state and errors)

#### Redux Form, src/utils/validators, validation, and forms

You'll see the input in the example application automatically has errors on it and validation.  
This is a perfect example of how you build a form or input system that has validation.  See our 
pre-built list of [validators](src/utils/validators.js)

See its use in action [here](src/routes/Todos/routes/Manage/containers/TodoView.js#L92-L107) with 
the Field component wrapped by a Form.  You'll notice the view is wrapped in the Redux-Form HOC.

Understand the use of 
[decorators.forceError](src/routes/Todos/routes/Manage/containers/TodoView.js#L106) - this shows 
the error immediately vs. waiting for a submit attempt or an un-focus action on the input.

#### Understand Progressive Loading:

Please understand via the application that you just cloned. Reload top-level with error button. 
Notice that its children will never get called, loaded (nor its children's api calls from the 
sagas) until after the top-level is loaded successfully.  This is all in place for you to 
understand fractal architecture and the mechanism of progressive loading.
