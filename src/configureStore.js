import { mainReducer } from "./reducers/index";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

const composeEnhancers =
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const middleware = [thunk, routerMiddleware(history)];
export default function configureStore() {
    let middlewares = [];
    const logger = createLogger({});
    if (process.env.NODE_ENV === "development") {
        // console.log("In development mode");
        middlewares.push(logger);
    }
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeEnhancers(...enhancers)

    return createStore(
        mainReducer,
        composedEnhancers
    );
}
