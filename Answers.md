1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        A. Filter, Map, Reduce. We use .map while extending properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        A. Actions are used to trigger a response to a user input or action. They are sent through  the reducers which changes state. The store is the container all state is held in.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        A. Application state would be where global state is held. Component state is state that is created inside of a component and modified within it. You would use component in cases where nothing else will ever need to access that state. You would use application state for all other cases.

1.  What is middleware?
        A. Middleware acts as an intermediary between actions and the reducer. This allows you to change the input that the reducer receives.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        A. Thunk allows you to perform asynchronous actions inside of Redux. It changes our actions creators in that we need to physically call dispatch for things to work.

1.  Which `react-redux` method links up our `components` with our `redux store`?
        A. connect links components with the redux store.
