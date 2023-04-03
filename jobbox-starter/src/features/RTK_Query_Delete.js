import { fetchJobs } from "./jobSlice";
import { postSlice } from "./RTK_Query";

const deleteQuery = postSlice.injectEndpoints({
    endpoints: (build) => ({
        deleteJob: build.mutation({
            query: (id) => ({
                url: `/job/${id}`,
                method: 'delete'
            }),
            async onQueryStarted(data, {dispatch, queryFulfilled}){
            // async onQueryStarted(id, {dispatch, queryFulfilled}){ // ai id ta hoilo  query: (id) ar id aybo ar pore use kora jaibo tai
                try{
                    const res = await queryFulfilled
                    dispatch(fetchJobs(data)) // dorkar lage ta data na dile o hoibo bo karon fetchJob a data ba kisu cay nai
                    // dispatch(fetchJobs(id)) // akon use kora jaibo tai
                }catch(error){

                }
            }
        })
    })
})

export const { useDeleteJobMutation } = deleteQuery