import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {deepOrange, deepPurple} from '@material-ui/core/colors';
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import NoSsr from "@material-ui/core/NoSsr";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '5vw',
        width: '100%',
        backgroundColor: 'white',
    },
    badge: {
        fontSize: '0.6vw',
    },
    navigation: {
        width: '80%',
    },
    margin: {
        margin: '0.5vw',
        fontSize: '1.5vw',
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: '2vw',
        height: '2vw',
        margin: theme.spacing(3),
    },
}));

export default function Storekeeper() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <NoSsr>
            <Box boxShadow={0}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.root}
                >

                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.navigation}
                    >
                        <BottomNavigationAction label="میزکار"
                                                icon={<img src="/images/cms13.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="درخواست کالا"
                                                icon={<img src="/images/cms21.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="صدور حواله"
                                                icon={<img src="/images/cms2.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="کاردکس"
                                                icon={<img src="/images/cms5.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="تسهیلات"
                                                icon={<img src="/images/cms15.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="گزارشات"
                                                icon={<img src="/images/cms4.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="تنظیمات"
                                                icon={<img src="/images/cms6.jpg" alt="icon" width="45"/>}/>
                        <BottomNavigationAction label="تغییر حوزه"
                                                icon={<img src="/images/cms17.jpg" alt="icon" width="45"/>}/>
                    </BottomNavigation>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Badge color="error" variant="dot">
                            <MailIcon/>
                        </Badge>
                        <Avatar className={classes.orange} src="/images/cmsUser.png">MS</Avatar>
                    </Box>

                </Grid>

            </Box>
        </NoSsr>
    );
}
