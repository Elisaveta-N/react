import { configureStore } from '@reduxjs/toolkit'
import {combineReducers } from 'redux'
import { checkboxReducer } from './reducers/reducers'
import agreementReducer from './features/agreementSlice'


const store = configureStore({ reducer: agreementReducer})

export default store