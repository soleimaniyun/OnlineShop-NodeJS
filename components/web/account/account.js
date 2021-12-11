import React from 'react'
import NoSsr from "@material-ui/core/NoSsr";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {Divider, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import RateReviewTwoToneIcon from '@material-ui/icons/RateReviewTwoTone';
import PlaceTwoToneIcon from '@material-ui/icons/PlaceTwoTone';
import CardGiftcardTwoToneIcon from '@material-ui/icons/CardGiftcardTwoTone';
import MessageTwoToneIcon from '@material-ui/icons/MessageTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Order from './order';
import Orders from './orders';
import Favorites from './favorites';
import Comments from './comments';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Suggestion from "./suggestion";

const useStyles = makeStyles({
    root: {
        padding: '1vw',
        color: '#585858',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
    },
    typographyFaSm: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
    },
    typographyEn: {
        direction: 'ltr',
        fontFamily: 'SansItalic',
        fontSize: '0.9vw',
        textAlign: 'right',
    },
    partitionA: {
        width: '19vw',
        minHeight: '20vw',
        margin: '0.5vw',
        padding: '1vw',
        backgroundColor: 'white'
    },
    partitionB: {
        width: '76vw',
        margin: '0.5vw',
        padding: '1vw',
        minHeight: '20vw',
    },
    avatar: {
        width: '3vw',
        height: '3vw',
    },
    button: {
        margin: '0.5vw',
        fontFamily: 'IRANSans',
    },
});

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

export default function Account(props) {

    const [view, setView] = React.useState('list');
    const [activeView, setActiveView] = React.useState(0);

    function View() {

        switch (activeView) {
            case 1 :
                return <Orders />
                break;

            case 2 :
                return <Favorites />
                break;

            case 3 :
                return <Comments />
                break;

            default :
                return <Order />
        }

    }

    const handleChange = (event, nextView) => {
        setView(nextView);
        if(nextView==='order') { setActiveView(1);}
        if(nextView==='favorites') { setActiveView(2);}
        if(nextView==='comment') { setActiveView(3);}

    };

    const classes = useStyles();

    return (
        <div>
            <NoSsr>
                <Box display="flex" className={classes.root}>
                    <Box className={classes.partitionA} boxShadow={1} borderColor="grey" borderRadius="borderRadius">
                        <Box display="flex">
                            <Avatar alt="Picture" src="/images/avatar1.png" className={classes.avatar}/>
                            <Box style={{marginRight: '0.5vw'}}>
                                <div>
                                <Typography className={classes.typographyFa}>
                                    محمدسلیمانیون
                                </Typography>
                                </div>
                                <div>
                                <Typography className={classes.typographyFaSm}>
                                    09360897079
                                </Typography>
                                </div>
                            </Box>
                        </Box>
                        <Box display="flex" style={{marginTop: '1vw', justifyContent: 'space-around'}}>
                            <Typography className={classes.typographyFa}>
                                کیف پول
                            </Typography>
                            <Box>
                                <div>
                                <Typography className={classes.typographyFa}>
                                    {(470000).toLocaleString()}
                                    تومان
                                </Typography>
                                </div>
                                <Button color="primary" className={classes.typographyFaSm}>افزایش اعتبار</Button>
                            </Box>
                        </Box>

                        <Divider/>

                        <StyledToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange} style={{width: '100%'}}>
                            <ToggleButton value="order" aria-label="order">
                                <Box display='flex' style={{width: '100%'}}>
                                    <ListAltTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>سفارشات من</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="favorites" aria-label="favorites">
                                <Box display='flex' style={{width: '100%'}}>
                                    <FavoriteTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>فهرست علاقه مندی</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="comment" aria-label="comment">
                                <Box display='flex' style={{width: '100%'}}>
                                    <RateReviewTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>نظرات</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="address" aria-label="address">
                                <Box display='flex' style={{width: '100%'}}>
                                    <PlaceTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>نشانی ها</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="gift" aria-label="gift">
                                <Box display='flex' style={{width: '100%'}}>
                                    <CardGiftcardTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>کارت هدیه</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="message" aria-label="message">
                                <Box display='flex' style={{width: '100%'}}>
                                    <MessageTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>پیامها</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="recent" aria-label="recent">
                                <Box display='flex' style={{width: '100%'}}>
                                    <AssignmentTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>بازدیدهای اخیر</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="profile" aria-label="profile">
                                <Box display='flex' style={{width: '100%'}}>
                                    <AssignmentIndTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>اطلاعات حساب</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="exit" aria-label="exit">
                                <Box display='flex' style={{width: '100%'}}>
                                    <ExitToAppTwoToneIcon style={{marginLeft: '0.5vw'}}/>
                                    <Typography className={classes.typographyFa}>خروج</Typography>
                                </Box>
                            </ToggleButton>
                        </StyledToggleButtonGroup>
                    </Box>
                    <Box className={classes.partitionB}>
                        {/*<Orders UID={props.UID}/>*/}
                        {/*<Favorites UID={props.UID}/>*/}
                        {/*<Comments UID={props.UID}/>*/}
                        <View />
                    </Box>
                </Box>
                <Suggestion deviceType="desktop" />
            </NoSsr>
        </div>
    )
}