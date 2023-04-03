import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
    const res = await fetch('http://localhost:5000/jobs')
    const data = await res.json()
    return data
})

const jobSlice = createSlice({
    name: 'job',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state, action) => {
            state.isLoading = true
            state.data = []
            state.error = null
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
        .addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading = false 
            state.data = []
            state.error = null
        })
    }
})

export default jobSlice.reducer