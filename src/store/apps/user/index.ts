// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios, { AxiosResponse } from 'axios'

interface DataParams {
  q: string
  role: string
  status: string
  currentPlan: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Users
export const fetchData = createAsyncThunk('appUsers/fetchData', async (params: DataParams) => {
  // const response = await axios.get('/apps/users/list', {
  //   params
  // })

  const response: any = {
    data: {
      users: [
        {
          id: 1,
          fullName: 'Galen Slixby',
          company: 'Yotz PVT LTD',
          role: 'editor',
          username: 'gslixby0',
          country: 'El Salvador',
          contact: '(479) 232-9151',
          email: 'gslixby0@abc.net.au',
          currentPlan: 'enterprise',
          status: 'inactive',
          avatar: '',
          avatarColor: 'primary'
        },
      ]
    },
    status: 200, // HTTP Status Code
    statusText: 'OK',
    headers: {}, // Your headers here
    request: {}  // HTTP request details
  };
  

  return response.data
})

// ** Add User
export const addUser = createAsyncThunk(
  'appUsers/addUser',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/apps/users/add-user', {
      data
    })
    dispatch(fetchData(getState().user.params))

    return response.data
  }
)

// ** Delete User
export const deleteUser = createAsyncThunk(
  'appUsers/deleteUser',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/users/delete', {
      data: id
    })
    dispatch(fetchData(getState().user.params))

    return response.data
  }
)

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.users
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appUsersSlice.reducer
