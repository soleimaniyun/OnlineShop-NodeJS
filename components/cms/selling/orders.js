import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '2%',
        //backgroundColor: 'none',
    },
}));

export default function Orders() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography>فهرست سفارشات :</Typography>
        </div>
    )
}