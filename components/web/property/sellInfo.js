import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import {Divider, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Style from '../../../styles/web/property.module.css';
import InfoIcon from '@material-ui/icons/Info';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "@material-ui/core/Button";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            padding: '0.5vw',
            fontFamily: 'IRANSans',
            fontSize: '0.8vw',
            color: '#686868',
        },
        borderRadius: '0.5vw',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        color: '#686868',
        textAlign: 'right',
    },
    typographyFaBold: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        fontWeight: 'bold',
        color: '#686868',
        textAlign: 'right',
    },
    typographyComment: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
        color: '#686868',
        textAlign: 'right',
    },
    typographyCost: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'right',
        margin: '0.5vw',
    },
    paper: {
        backgroundColor: '#f2f2f2',
        marginBottom: '1vw',
    },
    icon: {
        marginLeft: '0.5vw',
        color: '#00CCCC',
    },
    alarm: {
        color: 'orangered',
        marginLeft:'0.5vw'
    },
    list: {
        padding:'0vw',
    },
}));

export default function SellInfo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} variant="outlined">

                <List component="nav" aria-label="Seller">
                    <ListItem>
                        <Box display="flex" style={{width: '100%'}}>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    فروشنده :
                                </Typography>
                            </Box>
                            <Box flexGrow={1}>
                                <a style={{color:'#00CCCC'}}>6 فروشنده دیگر</a>
                            </Box>
                        </Box>
                    </ListItem>

                    <ListItem button>
                        <Box display="flex" alignItems="center">
                            <Box style={{width: '3vw'}}>
                                <img src="/images/smiles.png" alt="Symbol" className={Style.symbol}/>
                            </Box>
                            <Box style={{width: '16vw'}}>
                                <Typography className={classes.typographyFa}>
                                    شرکت تبسم خاورمیانه پارسه
                                </Typography>
                                <Typography className={classes.typographyComment}>
                                    عملکرد: 5 از 5 | 87.5% رضایت مشتریان از کالا
                                </Typography>
                            </Box>
                            <Box>
                                <InfoIcon fontSize="small"/>
                            </Box>
                        </Box>
                    </ListItem>

                    <Divider/>

                    <ListItem>
                        <Box display="flex" alignItems="center">
                            <Box>
                                <VerifiedUserTwoToneIcon fontSize="small" className={classes.icon}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    گارانتی ۱۸ ماهه پایتخت پارسه
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>

                    <Divider/>

                    <ListItem button>
                        <Box display="flex" flexDirection="column" style={{width: '19vw'}}>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <StorefrontTwoToneIcon fontSize="small" className={classes.icon}/>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        موجود در انبار فروشگاه لبخند
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <LocalShippingTwoToneIcon fontSize="small" className={classes.icon}/>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        ارسال از انبار تهران
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <InfoIcon fontSize="small"/>
                        </Box>

                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Box display="flex" justifyContent="flex-end" style={{width: '100%'}}>
                            <Typography className={classes.typographyCost}>
                                {(47000000).toLocaleString()}
                                تومان
                            </Typography>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box display="flex">
                            <VisibilityIcon fontSize="small" style={{marginLeft: '0.5vw'}}/>
                            <Typography className={classes.typographyFa}>
                                ۶۰+ نفر در حال بازدید این کالا می‌باشند.
                            </Typography>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained">افزودن به سبد خرید</Button>
                    </ListItem>
                </List>
            </Paper>
            <Paper className={classes.paper} variant="outlined">
                <List component="nav" aria-label="Seller" className={classes.list}>
                    <ListItem button>
                        <Box display="flex" alignItems="center" justifyContent="flex-start">
                            <Box>
                                <InfoOutlinedIcon fontSize="small" className={classes.alarm}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFaBold}>
                                    این کالا را ارزانتر بخرید
                                </Typography>
                                <Typography className={classes.typographyComment}>
                                    از
                                    {(47000000).toLocaleString()}
                                    تومان توسط فروشندگان دیگر
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                </List>
            </Paper>
            <Paper className={classes.paper} variant="outlined">
                <List component="nav" aria-label="Seller" className={classes.list}>
                    <ListItem button>
                        <Box display="flex" alignItems="center" justifyContent="flex-start">
                            <Box>
                                <InfoOutlinedIcon fontSize="small" className={classes.icon}/>
                            </Box>
                            <Box>
                                <Typography className={classes.typographyFa}>
                                    فرآیند قیمت گذاری و نظارت بر قیمتها
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                </List>
            </Paper>
        </div>
    );
}