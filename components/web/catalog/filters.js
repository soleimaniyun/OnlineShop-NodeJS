import React from 'react'
import Tree from './tree'
import Search from './search'
import Brands from './brands'
import Seller from './seller'
import Mode from './modes'
import Specs from './specs'
import Amount from './amount'

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import NoSsr from "@material-ui/core/NoSsr";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
        padding: 0,
        marginBottom: '1vw',
    },
    title: {
        fontSize: '0.8vw',
        fontFamily: 'IRANSans',
    },
    divider: {
        margin: '0.5vw 0',
    },
    divide: {
        marginBottom: '1vw',
    }
});

export default function Filters() {

    const classes = useStyles();

    return (
        <NoSsr>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        دسته بندی نتایج
                    </Typography>
                    <Divider className={classes.divider}/>
                    <Tree/>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        جستجو در نتایج
                    </Typography>
                    <Divider className={classes.divider}/>
                    <Search/>
                </CardContent>
            </Card>

            <Box className={classes.divide}>
                <Brands/>
            </Box>

            <Box className={classes.divide}>
                <Seller/>
            </Box>

            <Card className={classes.root}>
                <CardContent>
                    <Mode />
                </CardContent>
            </Card>

            <Box className={classes.divide}>
                <Specs/>
            </Box>

            <Card className={classes.root}>
                <CardContent>
                    <Amount />
                </CardContent>
            </Card>

        </NoSsr>
    )
}