import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/ShareTwoTone';
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import TimelineIcon from '@material-ui/icons/TimelineTwoTone';
import CompareIcon from '@material-ui/icons/Compare';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: '0.5vw',
        },
        flexDirection: 'column',
        marginTop: '1vw',
    },
}));

export default function Toolbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <ShareIcon />
                </IconButton>
               <IconButton color="primary" aria-label="upload picture" component="span">
                    <FavoriteIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <TimelineIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <CompareIcon />
                </IconButton>
        </div>
    );
}