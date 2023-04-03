import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobSlice';
import { useDeleteJobMutation } from '../../features/RTK_Query_Delete';

const MangeJobs = () => {
    const dispatch = useDispatch()
    const [deleteJob, {isSuccess}] = useDeleteJobMutation()
    useEffect(() => {
        dispatch(fetchJobs())
    }, [])
    const { data: { data }, isLoading, error } = useSelector(state => state.jobs)
    return (
        <div>
            <table>
                {data?.map(({ position, companyName, _id }) => <tr style={{borderColor: 'black', borderWidth: '2px'}}>
                        <td style={{borderWidth: '1px', borderColor: 'red'}}>{position}</td><td style={{borderWidth: '1px', borderColor: 'red'}}>{companyName}</td>
                        <td onClick={() => deleteJob(_id)}><button style={{backgroundColor: 'red', textColor: 'goldenrod'}}>Delete</button></td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default MangeJobs;