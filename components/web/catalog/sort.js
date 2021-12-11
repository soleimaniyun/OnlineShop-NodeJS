/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        width: '70%',
    },
    heading: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    title: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        fontWeight: 'bold',
    },
    box: {
        padding: '1vw 0 1vw 1vw',
    }
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <Box display="flex" className={classes.box}>
                <SortIcon />
                <Typography className={classes.title} >مرتب سازی بر اساس : </Typography>
            </Box>

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >پر بازدیدترین</Typography>
                }
            />

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >پر فروشترین</Typography>
                }
            />

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >جدیدترین</Typography>
                }
            />

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >محبوب ترین</Typography>
                }
            />

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >ارزانترین</Typography>
                }
            />

            <BottomNavigationAction
                label={
                    <Typography className={classes.heading} >گرانترین</Typography>
                }
            />

        </BottomNavigation>
    );
}
*/

import React from 'react';
import SortIcon from '@material-ui/icons/Sort';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles({
    root: {
        width: '70%',
    },
    heading: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    title: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        fontWeight: 'bold',
        color: '#808080',
    },
    box: {
        padding: '1vw 0 1vw 0.5vw',
    },
    toggle: {
        direction: 'ltr',
    },
    frame: {
        padding: '0.5vw 2vw 0.5vw 2vw',
    },
    icon: {
        paddingLeft: '0.3vw',
    },
});

export default function ToggleButtons() {

    const classes = useStyles();

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <NoSsr>
        <Box display="flex" alignItems="center" className={classes.frame}>
            <Box display="flex" className={classes.box}>
                <SortIcon className={classes.icon}/>
                <Typography className={classes.title}>مرتب سازی بر اساس : </Typography>
            </Box>
            <ToggleButtonGroup
                className={classes.toggle}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="cheap" aria-label="cheap">
                    <Typography className={classes.heading}>ارزانترین</Typography>
                </ToggleButton>
                <ToggleButton value="expensive" aria-label="expensive">
                    <Typography className={classes.heading}>گرانترین</Typography>
                </ToggleButton>
                <ToggleButton value="favorite" aria-label="favorite">
                    <Typography className={classes.heading}>محبوب ترین</Typography>
                </ToggleButton>
                <ToggleButton value="view" aria-label="view">
                    <Typography className={classes.heading}>پر بازدیدترین</Typography>
                </ToggleButton>
                <ToggleButton value="bestseller" aria-label="bestseller">
                    <Typography className={classes.heading}>پر فروشترین</Typography>
                </ToggleButton>
                <ToggleButton value="new" aria-label="new">
                    <Typography className={classes.heading}>جدیدترین</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
        </NoSsr>
    );
}