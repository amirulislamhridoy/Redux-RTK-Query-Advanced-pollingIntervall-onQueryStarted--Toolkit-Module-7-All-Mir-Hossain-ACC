import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.auth";

const initialState = {
    user: false, email: '', error: null
}

export const loginFetch = createAsyncThunk('user/loginFetch', async ({ email, password }, { dispatch }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const loginEmail = await userCredential.user.email
    return loginEmail
})
export const isLoged = createAsyncThunk('user/isLoged', async (n, thunkApi) => {
    const { dispatch } = thunkApi
    try {
        await onAuthStateChanged(auth, (user) => dispatch(setUser(user?.email)))
    } catch (err) {
        await dispatch(setUserError(err.code))
    }
})
export const registerFetch = createAsyncThunk("user/registerFetch", async ({ email, password }, { dispatch }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const signOutEmail = await userCredential.user.email
    return signOutEmail
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload) {
                state.user = true
            } else {
                state.user = false
            }
            state.email = action.payload
            state.error = null
        },
        setUserError: (state, action) => {
            state.user = false
            state.email = ''
            state.error = action.payload
        },
        signOutAction: (state, action) => {
            state.user = false
            state.email = ''
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginFetch.pending, (state, action) => {
            state.user = false
            state.error = ''
            state.email = null
        })
            .addCase(loginFetch.fulfilled, (state, action) => {
                state.user = true
                state.email = action.payload
                state.error = null
            })
            .addCase(loginFetch.rejected, (state, action) => {
                state.user = false
                state.error = null
                state.email = action.error.message
            })
        builder.addCase(registerFetch.pending, (state, action) => {
            state.user = false
            state.email = ''
            state.error = null
        }).addCase(registerFetch.fulfilled, (state, action) => {
            state.user = true
            state.email = action.payload
            state.error = null
        }).addCase(registerFetch.rejected, (state, action) => {
            state.user = false
            state.email = ''
            state.error = action.error.message
        })

    }
})

export const { setUser, setUserError, signOutAction } = userSlice.actions
export default userSlice.reducer;