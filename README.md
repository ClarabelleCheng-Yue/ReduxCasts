# ReduxCasts

Each example from the course can be found within this repo. You can either look at the files in a completed state, or check out the changes that were made in a particular section by clicking on one of the links below.

Terminology:
- Reducers: a fn that returns a piece of the application state; upon action dispatched, the switch statement inside reducer will return a specific new state
- import .. from ... vs require(...): import is ES6 and can import specific piece of a JS module. Import is hoisted and run at beginning of file.; require imports the entire JS module. require can be run inline later on page.; both are synchronous
- containers: smart components that use state/data stored in redux
- react-redux: the middleman between data store (redux) and the views (react); shows data in views
- action creator: triggered by UI, returns an action/a new state
- action: a state sent to all reducers to change a specific state piece; all reducers process the action and return new state to assemble new state, then containers are notified of the changes to state. On notification, containers will rerender with new props.
- middleware: fns that take an action and depending on action's type/payload/etc, middleware can choose to let action pass through, stop it, manipulate it before it reaches the reducers.