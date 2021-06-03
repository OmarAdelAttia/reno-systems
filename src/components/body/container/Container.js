import React, { useState, useEffect } from 'react'
import './Container.css'
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton, Button } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import LockIcon from '@material-ui/icons/Lock';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';


const fetchTasks = () => {
    return fetch("http://localhost:3004/tasks")
        .then((response) => response.json())
        .then((data) => data);
}

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
    },
});

function Container() {

    const classes = useStyles();

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks().then((tasks) => setTasks(tasks));
    }, []);


    console.log(tasks);

    return (
        <div className='container_component'>
            <div className='filter'>
                <div className='search'>
                    <SearchIcon />
                    <input placeholder='Search...' type='text' />
                </div>
                <input placeholder='User Name' type='text' className='username' />
            </div>
            <div className='edit'>
                <h3>selected | </h3>
                <IconButton>
                    <CreateIcon />
                </IconButton>
                <IconButton>
                    <BlockIcon />
                </IconButton>
                <IconButton>
                    <LockIcon />
                </IconButton>
                <Button>
                    <h5>
                        Assign to Profile
                    </h5>
                </Button>
                <Button>
                    <h5>
                        Assign to Group
                    </h5>
                </Button>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                <IconButton className={classes.root}>
                    <GetAppIcon />
                </IconButton>
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                User Name
                            </th>
                            <th>
                                Email Address
                            </th>
                            <th>
                                Group
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Created on
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr>
                                <td>
                                    {task.name}
                                </td>
                                <td>
                                    {task.userName}
                                </td>
                                <td>
                                    {task.emailAddress}
                                </td>
                                <td>
                                    {task.group}
                                </td>
                                <td>
                                    {task.status}
                                </td>
                                <td>
                                    {task.createdOn}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Container
