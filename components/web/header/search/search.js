import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Style from '../../../../styles/web/search.module.css'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0.2vw 0.5vw',
        display: 'flex',
        alignItems: 'center',
        width: '33vw',
    },
    input: {
        flex: 1,
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        width: '30vw',
    },
    iconButton: {
        padding: '0.6vw',
    },
}));

export default function Search() {
    const classes = useStyles();

    return (
        <NoSsr>
        <React.Fragment>
        <Paper component="form" className={Style.frame}>
            <InputBase
                className={classes.input}
                placeholder="جستجوی کالا در فروشگاه ..."
                inputProps={{ 'aria-label': 'جستجو در فروشگاه' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        </React.Fragment>
        </NoSsr>
    );
}