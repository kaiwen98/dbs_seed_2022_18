import {configureStore} from '@reduxjs/toolkit'
import sampleReducer from './reducers/sampleSlice'
export default configureStore({
  reducer: {
    SAMPLE_TYPE: sampleReducer 
  }
})
