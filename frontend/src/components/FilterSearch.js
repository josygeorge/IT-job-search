import React from 'react';
import { Input } from 'antd';
import { filterSearchJobs } from '../redux/actions/jobsActions';
import { useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

function FilterSearch() {

    const dispatch = useDispatch();


    return (
        <div className='flex-layout search-jobs'>
            <Input
                className="border border-primary"
                prefix={<SearchOutlined style={{ fontSize: '11px' }} />}
                allowClear
                placeholder="Search & Filter Job"
                onChange={(e) => dispatch(filterSearchJobs(e.target.value))}
            />
        </div>
    )
}

export default FilterSearch;
