/** @format */

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { activitiesReducer } from './reducers/activitiesReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
});

const store = configureStore({
  reducer: { activities: activitiesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
export type AppDispatch = typeof store.dispatch;
export default store;
