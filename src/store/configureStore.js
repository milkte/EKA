/**
 * Created by mupxq on 8/24/17.
 */
import {createStore} from 'redux'
import rootReducer from '../reducer/index'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,

        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    return store;
}

// export default function configureStore(initialState) {
//     const store = createStore(rootReducer, initialState,
//         // active redux-devtools
//         window.devToolsExtension ? window.devToolsExtension() : undefined
//     );
//     return store
// }