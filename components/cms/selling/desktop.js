import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '50%',
        width: '100%',
        padding: '5%',
        //backgroundColor: 'none',
    },
}));

export default function Desktop() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img src="/images/desktop_sale.png" alt="Wallpaper" />
        </div>
    )
}