import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import StopRoundedIcon from '@material-ui/icons/StopRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '2%',
        //backgroundColor: 'none',
    },
}));

export default function Pricing() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <StopRoundedIcon/>
            <Typography>قیمت کالا :</Typography>
        </div>
    )
}