import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import { firestoreReducer } from "redux-firestore"

const rootReducer = combineReducers({
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer