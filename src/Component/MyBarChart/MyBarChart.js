import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h3>INVESTMENT IN MONTH</h3>
            <br />
            <BarChart width={500} height={300} data={data}>
                <XAxis dataKey={'month'} stroke='#8884d8'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke='#ccc' strokeDasharray='5 5'></CartesianGrid>
                <Bar dataKey={'investment'} fill='green' barSize={30}></Bar>
            </BarChart>
        </div>
    );
};

export default MyBarChart;