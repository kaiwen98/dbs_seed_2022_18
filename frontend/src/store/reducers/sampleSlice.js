import React, {useState, useEffect, createContext, useContext} from "react"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { server } from '../../api/server'
import Cookies from 'js-cookie';
import { 
  TOKEN_NAME,
} from "../../utils/constants";
import {createRequest} from "./utils"; 

import {
  SUCCESS_POSTFIX,
  FAILURE_POSTFIX,
  LOADING_POSTFIX
} from "../types"

export const FETCH_SAMPLES = "FETCH_SAMPLES"
export const ADD_SAMPLE = "ADD_SAMPLE"
export const DELETE_SAMPLE = "DELETE_SAMPLE"

const initialState = {
  items: {},
  status: 'idle',
  error: null
}

export const fetchSamples = createRequest(
  "samples/fetchSamples",
  async () => {
    const token = Cookies.get(TOKEN_NAME) ? Cookies.get(TOKEN_NAME) : "";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return server.get(
      '/user/get/sample/all', 
      {}, 
      config
    )
  }
)

export const addSample = createRequest(
  "samples/addSample",
  async (input) => {
    const token = Cookies.get(TOKEN_NAME) ? Cookies.get(TOKEN_NAME) : "";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
    return server.post(
      '/user/register/sample', 
      input, 
      config
    )
  }  
)

export const deleteSample = createRequest(
  "links/deleteSample",
  async (input) => {
    const token = Cookies.get(TOKEN_NAME) ? Cookies.get(TOKEN_NAME) : "";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
    return server.post(
      `/user/delete/sample/${input}`, 
      config
    )
  },
)

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    // Handle general cases
    [
      {
        api: fetchSamples, 
        actionTypePrefix: FETCH_SAMPLES, 
        reduceFunction: (state, action) => state.items = {...state.items, ...action.payload},
      },
      {
        api: addSample, 
        actionTypePrefix: ADD_SAMPLE, 
        reduceFunction: (state, action) => state.items = {...state.items, ...action.payload},
      },
      {
        api: deleteSample, 
        actionTypePrefix: DELETE_SAMPLE, 
        reduceFunction: (state, action) => delete state.items[action.payload],
      }
    ].forEach(
      request => {
        console.log(request.api)
        builder
        .addCase(request.api.pending, (state, action) => {
          state.status = request.actionTypePrefix + "__" + LOADING_POSTFIX
        })
        .addCase(request.api.rejected, (state, action) => {
          state.status = request.actionTypePrefix + "__" + FAILURE_POSTFIX
          state.error = action.error.message
        })
        .addCase(request.api.fulfilled, (state, action) => {
          state.status = request.actionTypePrefix + "__" + SUCCESS_POSTFIX
          request.reduceFunction(state, action);
        })
      }
    )}
})

export default sampleSlice.reducer

export const selectAllSamples = state => state.sample.items;

export const selectSampleStatus = state => state.sample.status;
export const selectSampleError = state => state.sample.error;

export const selectSample = state => state.sample

export const selectAllSampleIds = state => {
  console.log(Object.keys(state.sample.items))
  return Object.keys(state.sample.items);
}
