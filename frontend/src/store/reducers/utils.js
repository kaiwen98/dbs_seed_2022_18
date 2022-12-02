import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const createRequest = (
  actionTypePrefix,
  apiRequest
) => {
  return createAsyncThunk(actionTypePrefix, async (input) => {
    const response = await apiRequest(input);

    if (response.data["status_code"] !== 1100) {
      throw new Error(response.data["status_message"], {code: response.data["status_code"]});
    }

    if (!response.data.output) {
      throw new Error("No data from server")
    }

    return response.data.output
  })
}

export const selectAllItems = (state, type) => state[type].items;

export const selectItemStatus = (state, type) => state[type].status;
export const selectItemError = (state, type) => state[type].error;

export const selectItem = (state, type) => state[type]

export const selectAllItemIds = (state, type) => {
  console.log(Object.keys(state[type].items))
  return Object.keys(state[type].items);
}
