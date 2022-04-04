import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';


const Dashboard = () => {

    return (
        <div className='d-flex justify-content-between m-5'>
            <MyLineChart></MyLineChart>
            <br />
            <br />
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;