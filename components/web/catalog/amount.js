/*
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '18vw' + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
    typo: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    divider: {
        margin: '0.5vw 0'
    },
    slider: {
        marginTop: '1vw',
    },
}));

const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

const marks = [
    {
        value: 0,
        label: 'ده هزار',
    },
    {
        value: 20,
        label: 'صد هزار',
    },
    {
        value: 40,
        label: 'یک میلیون',
    },
    {
        value: 100,
        label: 'یک میلیارد',
    },
];

function valuetext(value) {
    return ` تومان ${value}`;
}

function AirbnbThumbComponent(props) {
    return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
    );
}

export default function Amount () {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom className={classes.typo}>حدود قیمت محصول</Typography>
            <Divider className={classes.divider} />
            <AirbnbSlider
                className={classes.slider}
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[20, 40]}
                getAriaValueText={valuetext}
                step={4}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    )
}*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        width: '18vw',
    },
    typo: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    divider: {
        margin: '0.5vw 0'
    },
    slider: {
        marginTop: '1vw',
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([10, 90]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography gutterBottom className={classes.typo}>حدود قیمت محصول</Typography>
            <Divider className={classes.divider} />
            <Slider
                className={classes.slider}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
