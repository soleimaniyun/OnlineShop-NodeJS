import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0.2vw 0.4vw',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    iconButton: {
        padding: '0.5vw',
    },
    divider: {
        height: '4vw',
        margin: '1vw',
    },
}));

export default function Search() {
    const classes = useStyles();

    return (
        <form component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="عنوان محصول یا برند را وارد نمایید."
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </form>
    );
}