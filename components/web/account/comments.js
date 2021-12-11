import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StopIcon from "@material-ui/icons/Stop";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import {Divider} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
        width:'50%',
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'none',
        width: '100%',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
    },
    typographyFaSm: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
    },
}));

export default function Comments(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <Box display='flex'>
                <StopIcon fontSize='small' style={{margin: 'auto 0.1vw'}} />
                <Typography className={classes.typographyFa} style={{margin: '1vw 0'}}>نظرات</Typography>
            </Box>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="Favorites"
                >
                    <Tab label="در انتظار ثبت نظر" {...a11yProps(0)} className={classes.typographyFa}/>
                    <Tab label="نظرات من" {...a11yProps(1)} className={classes.typographyFa} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir='rtl'>
                    <Box display="flex" >
                        <ErrorTwoToneIcon fontSize='small' style={{marginLeft:'0.3vw',color:'orangered'}} />
                        <Typography className={classes.typographyFa}>فهرست کالا های خریداری شده توسط شما خالی میباشد.</Typography>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1} dir='rtl'>
                    <Box display='flex'>
                        <ErrorTwoToneIcon fontSize='small' style={{marginLeft:'0.3vw',color:'orangered'}} />
                        <Typography className={classes.typographyFa}>فهرست نظرات شما خالی میباشد.</Typography>
                    </Box>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
