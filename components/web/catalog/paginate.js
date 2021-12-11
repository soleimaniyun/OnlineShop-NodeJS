import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '1vw',
            fontFamily: 'IRANSans',
        },

    },
    paginate: {
        direction: 'ltr',
        padding: '0.5vw',
    },
    textPrimary: {
        fontFamily: 'AnjomanFaNum-Medium',
    }

}));

export default function Paginate() {
    const classes = useStyles();

    return (
        <div className={classes.paginate}>
            <Pagination count={10} color="primary" variant="text" className={classes.root}/>
        </div>
    );
}