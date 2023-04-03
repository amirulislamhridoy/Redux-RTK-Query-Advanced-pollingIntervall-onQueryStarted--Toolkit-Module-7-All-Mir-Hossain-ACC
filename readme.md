# RTK Query
## problem (mongoose not working properly for Schema is not good)
1. {pollingInterval: true} => like a realtime fetch system.
1. injecting use in RTK Query [this system is module 6 video 9] [file name productSlice & producet Api]
2. {refetchOnMountOrArgChange: true} => every mount & unmount or any change time => it will do re-fetch
3. Automated Re-fetching => i)tagTypes: ['Post', 'User'], ii)providesTags: ['Post'], iii) invalidatesTags: ['Post'],

# Redux Toolkit [Github repo Link => it is only redux toolkit understending repo](https://github.com/amirulislamhridoy/Redux-toolkit-full-example-module-5-ACC-mir-hossain.git)
### Error solve
use new keyword front of ObjectId => {_id: new ObjectId(id)}
### main topics
* 1, 2, 3 in productSlice file *
1) add middlewares => (logger)
2) get, post, delete in 1 slice redux file
3) (thunkApi.dispatch use in redux) 1 time call to 2 dispatch => 1(first) fetching dispatch 2(second) state change dispatch

# Vanila Redux (previous version)