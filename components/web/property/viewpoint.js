import React from 'react';
import PropTypes from 'prop-types';
import Style from '../../../styles/web/property.module.css'
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Divider} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Sort from './sort';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from "@material-ui/core/IconButton";
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import RecordVoiceOverTwoToneIcon from '@material-ui/icons/RecordVoiceOverTwoTone';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import Arrange from './arrange';
import Pagination from "@material-ui/lab/Pagination";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

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
        height: 8,
        borderRadius: 5,
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
        '& > *': {
            margin: '1vw',
            fontFamily: 'IRANSans',
        },
        backgroundColor: 'none',
        width: '100%',
        color: '#686868',
        minHeight: '30vw',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        textAlign: 'right',
        padding: '0.3vw',
    },
    typographyEn: {
        direction: 'ltr',
        fontFamily: 'SansItalic',
        fontSize: '0.9vw',
        textAlign: 'right',
        padding: '0.3vw',
    },
    typographyText: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        textAlign: 'justify',
        padding: '0.5vw',
        lineHeight: '1.8',
    },
    tab: {
        borderBottom: '1px #C8C8C8 solid',
    },
    typographyFaTi: {
        fontFamily: 'IRANSans',
        fontSize: '2vw',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: '0.3vw',
    },
    typographyFaBo: {
        fontFamily: 'IRANSans',
        fontSize: '1vw',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: '0.3vw',
    },
    typographyFaSm: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: '0.3vw',
    },
    typographyCost: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'right',
        margin: '0.5vw',
    },
    space: {
        marginTop: '0.5vw',
        marginBottom: '1vw',
    },
    button: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        width: '100%',
    },
    checkBox: {
        fontFamily: 'AnjomanFaNum-Medium',
        fontSize: '0.8vw',
    },
}));

const Accordion = withStyles({
    root: {
        border: '0px solid #F8F8F8',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#F8F8F8',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flexDirection: 'column',
        backgroundColor: '#F8F8F8',
    },
}))(MuiAccordionDetails);

export default function viewpoint() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChangeTik = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="full width tabs example"

                >
                    <Tab label="?????? ?? ??????????" {...a11yProps(0)} className={classes.tab}/>
                    <Tab label="????????????" {...a11yProps(1)} className={classes.tab}/>
                    <Tab label="???????????? ??????????????" {...a11yProps(2)} className={classes.tab}/>
                    <Tab label="???????? ?? ????????" {...a11yProps(3)} className={classes.tab}/>
                </Tabs>
            </Box>
            <div className={Style.panelM}>
                <div className={Style.panelN}>
                    <TabPanel value={value} index={0} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                ?????????? ???????????? ??????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                ???????? ???????????? ?????????????? ?????? Galaxy A12 SM-A125F/DS ???? ?????? ???????? ?????????? 64 ????????????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyEn}>
                                Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyText}>
                                ???????? A12 ?????? ???????? ???? ???????? ??????????????? ???????? ?????????????? ?????? ???? ???? ?????????? 24 ???????????? 2020 ?????????? ????.
                                ????????
                                ?????????????? ???????? ?????? ?????????? ?????? ???? ???? ????????????????????? 6.5 ?????????? ???? ?????????????? 1600 ???? 720 ????????????
                                ??????????????
                                ???????? ??????. ?????? ????????????????????? ???? ???? ???????? 264 ?????????? ???? ???????? ????????????? ???? ???? ???????????? ?? ???????? ??????????
                                ????????
                                ???????????????? ??????. ????????????? ?????? ?????????? Mediatek MT6765 Helio P35 ???? ??????????????????? ???? ????????????????
                                ??????????????
                                ?????? ???? ???? ???????????????? ?????????? ?????? ??????????????? Cortex-A55 ?? ???????????????? ?????????????? PowerVR GE8320 ??????????
                                ??????
                                ??????. ?????? ?????????? ???????? ?????????????? ?????????? ???????????? ??????????????? ??????????????? ?? ???????????? ?????????? ?????????? ??????. ??????
                                ????????
                                ???? 4 ???????????????? ???? ?? 64 ???????????????? ?????????? ?????????? ???????? ?????? ?????? ?? ???? ?????????????? ???? ???? ???????? ???????????????
                                ?????????? ???????? ???????????? ??????. ???? ?????? ?????? ???????? A12 ???? ???????????? ???????????????? ???????? ?????????? ??????. ???? ??????
                                ???????? ????
                                ?????????????? 48 ?????????????????? ???? ?????? ?????? ???????? ???? ?????????????? 5 ?????????????????? ???? ?????? ?????????? ???? ?????????????? 2
                                ???????????????? ?? ???? ???????? ?????? 2 ?????????????????? ???????????? ???????????? A12 ???? ?????????? ?????????????. ???????? ???????????? ????????
                                ???? ????
                                ?????? 8 ?????????????????? ???? ?????? ???????? ???????????? ?????? ?????? ???? ???? ???????? ?????????? ????????????????????? ???????? ?????????? ??????.
                                ????????
                                ?????????? ???????? A12 ???? ?????????? ????????????-???????????? ???? ?????????? 5000 ??????????????????????????? ?????? ???? ???? ???????????? ????????
                                ????????
                                15 ???????? ???? ???????????????? ????????????? .
                            </Typography>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                ???????????? ??????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                ???????? ???????????? ?????????????? ?????? Galaxy A12 SM-A125F/DS ???? ?????? ???????? ?????????? 64 ????????????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyEn}>
                                Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                            </Typography>
                        </div>
                        <div>
                            <div className={Style.properties}>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ???????????? ?????????? :
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ??????????
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        164x75.8x8.9 ?????????????????
                                    </Typography>
                                </Box>
                            </div>
                            <div className={Style.properties}>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>

                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ?????????????? ?????? ????????
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ???????? ???????? (8.8 ?? 12.3 ?????????????????)
                                    </Typography>
                                </Box>
                            </div>
                            <div className={Style.properties}>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>

                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ??????
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        205 ??????
                                    </Typography>
                                </Box>
                            </div>
                            <div className={Style.properties}>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>

                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ???????????? ????????
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ?????? ???????? ?? ???????? ???? ??????????????
                                    </Typography>
                                </Box>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                ???????????? ?? ???????????? ??????????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                ???????? ???????????? ?????????????? ?????? Galaxy A12 SM-A125F/DS ???? ?????? ???????? ?????????? 64 ????????????????
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyEn}>
                                Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                            </Typography>
                        </div>

                        <div style={{minHeight: '40vw'}}>

                            <div className={Style.panelK}>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.typographyFaTi}>4.5</Typography>
                                    <Typography className={classes.typographyFaBo}>???? 6</Typography>
                                </Box>
                                <Box>
                                    <StarBorderIcon style={{color: 'orange'}}/>
                                    <StarHalfIcon style={{color: 'orange'}}/>
                                    <StarIcon style={{color: 'orange'}}/>
                                    <StarIcon style={{color: 'orange'}}/>
                                    <StarIcon style={{color: 'orange'}}/>
                                    <StarIcon style={{color: 'orange'}}/>
                                </Box>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>?????????? ???????? : </span><span>4</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={70}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>???????? ???????? ???? ???????? ???????? : </span><span>4.2</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={75}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>???????????? : </span><span>3.7</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={65}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>?????????????? ?? ???????????? ???? : </span><span>4.5</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={80}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>?????????? ?????????????? : </span><span>4</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={70}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>?????????? ?? ???????? : </span><span>3</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={50}/>
                                </div>

                                <div className={classes.space} style={{marginTop: '2vw'}}>
                                    <Typography className={classes.typographyFa}
                                                style={{fontSize: '0.8vw'}}><ThumbsUpDownIcon/>
                                        ???????????? ?????? ???? ???????????? ?????? ???????? ???????? ????????.
                                    </Typography>
                                </div>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button}>????????????
                                        ????????????</Button>
                                </div>

                            </div>
                            <div className={Style.panelL}>
                                <Box display="flex" alignItems="center" style={{margin: '1.3vw'}}>
                                    <NewReleasesIcon style={{color: '#CCFF00'}}/>
                                    <Typography className={classes.typographyFa}>?????? ???? ?????? ?????? ???? ???????????????? ?????? ?????????? ????
                                        ?????????????? ?????????????????</Typography>
                                </Box>
                                <Divider/>
                                <Box style={{margin: '1vw'}}>
                                    <Sort/>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <FeedbackIcon fontSize="small"/>
                                    <Typography className={classes.typographyFa}>
                                        ?????????? ????????
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.typographyFaSm}
                                                style={{borderBottom: '2px solid red'}}>
                                        ?????? ??????????
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        ????????????
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        1399/9/12
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1.5vw', color: 'green'}}>
                                    <ThumbUpIcon fontSize="small"/>
                                    <Typography className={classes.typographyFaSm}>
                                        ???????? ?????? ?????????? ???? ?????????? ?????????????.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        ???? ???? ???????????? ?? ???????????? ???????? ???????? ???????? ?? ?????????? ??????????
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                    <Typography className={classes.typographyFaSm}>
                                        ?????? ?????? ???????????? ?????????????? ???????? ????????
                                    </Typography>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <Typography className={classes.typographyFaSm}>73</Typography>
                                        <ThumbUpIcon style={{fontSize: '1vw'}}/>
                                    </IconButton>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <Typography className={classes.typographyFaSm}>45</Typography>
                                        <ThumbDownIcon style={{fontSize: '1vw'}}/>
                                    </IconButton>
                                </Box>
                                <Divider/>

                                <Box display="flex" alignItems="center">
                                    <FeedbackIcon fontSize="small"/>
                                    <Typography className={classes.typographyFa}>
                                        ??????????
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.typographyFaSm}
                                                style={{borderBottom: '2px solid red'}}>
                                        ?????????? ????????????
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        ????????????
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        1399/9/12
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center"
                                     style={{marginTop: '1.5vw', color: 'orangered'}}>
                                    <ThumbDownIcon fontSize="small"/>
                                    <Typography className={classes.typographyFaSm}>
                                        ???????? ?????? ?????????? ???? ?????????? ???????????????.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        ???? ???? ?????? ?????????????? ???????? ?????????????? ???? ???????????? ?????????? ???????? ?? ???? ???????????? ???????? ?? ?????? ??????
                                        ??????
                                        ??????????
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                    <Typography className={classes.typographyFaSm}>
                                        ?????? ?????? ???????????? ?????????????? ???????? ????????
                                    </Typography>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <Typography className={classes.typographyFaSm}>73</Typography>
                                        <ThumbUpIcon style={{fontSize: '1vw'}}/>
                                    </IconButton>
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <Typography className={classes.typographyFaSm}>45</Typography>
                                        <ThumbDownIcon style={{fontSize: '1vw'}}/>
                                    </IconButton>
                                </Box>
                                <div dir="ltr">
                                    <Pagination count={10} shape="rounded"/>
                                </div>

                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={3} dir="rtl">
                        <Box>
                            <div>
                                <Typography className={classes.typographyFa}>
                                    ???????? ?? ???????? ???? ???????? ??????????
                                </Typography>
                            </div>
                            <div>
                                <Typography className={classes.typographyFa}>
                                    ???????? ???????????? ?????????????? ?????? Galaxy A12 SM-A125F/DS ???? ?????? ???????? ?????????? 64 ????????????????
                                </Typography>
                            </div>
                            <div>
                                <Typography className={classes.typographyEn}>
                                    Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                                </Typography>
                            </div>
                            <div>
                                <div className={Style.panelK}>
                                    <Paper elevation={0} style={{padding: '1vw', marginTop: '2vw'}}>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={<Checkbox checked={state.checkedA} onChange={handleChangeTik}
                                                                   name="checkedA"/>}
                                                label={<Typography className={classes.checkBox}>???????? ?????? ???????? ????????
                                                    ??????</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={state.checkedB} onChange={handleChangeTik}
                                                                   name="checkedB"/>}
                                                label={<Typography className={classes.checkBox}>???????? ?????? ????
                                                    ????????</Typography>}
                                            />
                                            <Divider style={{width: '100%', marginTop: '1vw', marginBottom: '1vw'}}/>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={state.checkedC}
                                                        onChange={handleChangeTik}
                                                        name="checkedC"
                                                        color="primary"
                                                        size="small"
                                                    />
                                                }
                                                label={<Typography className={classes.checkBox}>???????? ??????
                                                    ????</Typography>}
                                            />
                                        </FormGroup>
                                        <Divider style={{width: '100%', marginTop: '1vw', marginBottom: '1vw'}}/>
                                        <div>
                                            <Typography className={classes.typographyFaSm}>???????? ?????? ???? ???? ???????? ?????? ????????
                                                ????????
                                                ????????.</Typography>
                                        </div>
                                        <div style={{marginTop: '1vw'}}>
                                            <Button variant="contained" color="primary" className={classes.button}>??????
                                                ????????</Button>
                                        </div>
                                    </Paper>
                                </div>
                                <div className={Style.panelL}>
                                    <Box style={{margin: '1vw'}}>
                                        <Arrange/>
                                    </Box>
                                    <Box display="flex">
                                        <ContactSupportTwoToneIcon style={{color: 'green'}}/>
                                        <Typography className={classes.typographyFa}>
                                            ???????? ?????? ???????? ???????? ?????? ?????????? ?????????????????????? ?????????? ???????? ?????? ???????? ?????? ???? ????????
                                            ????????
                                            ?????? ?????? ???????? ???? ????????.
                                        </Typography>
                                    </Box>
                                    <Box display="flex">
                                        <RecordVoiceOverTwoToneIcon/>
                                        <Typography className={classes.typographyFa} style={{color: 'grey'}}>
                                            ?????? ???? ?????? ?????? ?????? ?????????? ???????? ?????? ?? ???? ?????????????? ?????? ?????? ?????? ?????? ???????? ???????? ??????
                                            ??????
                                            ???? ?????? ?????????? ??????????
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.typographyFaSm} style={{color: 'slategray'}}>
                                            <BorderColorTwoToneIcon style={{fontSize: '1vw', marginLeft: '0.2vw'}}/>
                                            ?????????? ????????
                                        </Typography>
                                        <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                            <Typography className={classes.typographyFaSm}>
                                                ?????? ?????? ???????? ?????????????? ???????? ????????
                                            </Typography>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <Typography className={classes.typographyFaSm}>73</Typography>
                                                <ThumbUpIcon style={{fontSize: '1vw'}}/>
                                            </IconButton>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <Typography className={classes.typographyFaSm}>45</Typography>
                                                <ThumbDownIcon style={{fontSize: '1vw'}}/>
                                            </IconButton>
                                        </Box>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className={classes.typographyFa}>???????????? ???????? ?????? ????????
                                                    ...</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box display="flex" style={{width: '100%'}}>
                                                    <RecordVoiceOverTwoToneIcon/>
                                                    <Typography className={classes.typographyFa}
                                                                style={{color: 'grey'}}>
                                                        ???????? ???????? ?????? ?????????? ???????? ?????? ???? ???????? ?? ???????? ?????? ?????? ???? ?????????? ??????
                                                        ??
                                                        ????????????
                                                    </Typography>
                                                </Box>
                                                <div>
                                                    <Typography className={classes.typographyFaSm}
                                                                style={{color: 'slategray'}}>
                                                        <BorderColorTwoToneIcon
                                                            style={{fontSize: '1vw', marginLeft: '0.2vw'}}/>
                                                        ?????????? ????????????
                                                    </Typography>
                                                </div>
                                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                                    <Typography className={classes.typographyFaSm}>
                                                        ?????? ?????? ???????? ?????????????? ???????? ????????
                                                    </Typography>
                                                    <IconButton color="primary" aria-label="upload picture"
                                                                component="span">
                                                        <Typography className={classes.typographyFaSm}>73</Typography>
                                                        <ThumbUpIcon style={{fontSize: '1vw'}}/>
                                                    </IconButton>
                                                    <IconButton color="primary" aria-label="upload picture"
                                                                component="span">
                                                        <Typography className={classes.typographyFaSm}>45</Typography>
                                                        <ThumbDownIcon style={{fontSize: '1vw'}}/>
                                                    </IconButton>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                    <div dir="ltr" style={{marginTop: '2vw'}}>
                                        <Pagination count={10} shape="rounded" />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </TabPanel>
                </div>
                <div className={Style.panelO}>
                    <Paper style={{padding:'1vw'}}>
                        <Box display="flex" alignItems="center">
                            <img src="/gallery/products/samsungA12_4.jpg" alt="Product image." className={Style.picture}/>
                            <Typography className={classes.typographyFa}>
                                ???????? ???????????? ?????????????? ?????? Galaxy A12 SM-A125F/DS ???? ?????? ???????? ?????????? 64 ????????????????
                            </Typography>
                        </Box>
                        <Divider/>
                        <Box display="flex" alignItems="center">
                            <Box style={{width: '3vw'}}>
                                <img src="/images/smiles.png" alt="Symbol" className={Style.symbol}/>
                            </Box>
                            <Box style={{width: '16vw'}}>
                                <Typography className={classes.typographyFa}>
                                    ???????? ???????? ?????????????????? ??????????
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <VerifiedUserTwoToneIcon fontSize="small" className={classes.icon}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    ?????????????? ???? ???????? ???????????? ??????????
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <StorefrontTwoToneIcon fontSize="small" className={classes.icon}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    ?????????? ???? ?????????? ?????????????? ??????????
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <LocalShippingTwoToneIcon fontSize="small" className={classes.icon}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    ?????????? ???? ?????????? ??????????
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="flex-end" style={{width: '100%'}}>
                            <Typography className={classes.typographyCost}>
                                {(47000000).toLocaleString()}
                                ??????????
                            </Typography>
                        </Box>
                        <Box>
                            <Button variant="contained">???????????? ???? ?????? ????????</Button>
                        </Box>
                    </Paper>
                </div>
            </div>
        </div>
    );
}
