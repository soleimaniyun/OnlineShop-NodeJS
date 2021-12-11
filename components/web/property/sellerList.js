import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Style from "../../../styles/web/property.module.css";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    table: {
        minWidth: '50vw',
        fontFamily: 'IRANSans',
    },
    header: {
        padding: '1vw',
        fontFamily: 'IRANSans',
        fontSize: '1vw',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        textAlign: 'right',
    },
    typographyComment: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
        textAlign: 'right',
    },
    icon: {
        marginLeft: '0.5vw',
    },
    span: {
        borderBottom: '1px orangered solid',
        padding: '0.5vw',
        color: 'dimgray',
    },
});

export default function SellerList() {
    const classes = useStyles();

    return (
        <div>
            <Box>
                <Typography className={classes.header}>
                    <span className={classes.span}>فهرست فروشندگان این کالا :</span>
                </Typography>
            </Box>
            <TableContainer>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.row}>
                            <TableCell component="th" scope="row" className={classes.cell}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <img src="/images/smiles.png" alt="Symbol" className={Style.symbol}/>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.typographyFa}>فروشگاه موبایل
                                            ایرانیان</Typography>
                                        <Typography className={classes.typographyComment}>عملکرد: 5 از 5 | 87.5% رضایت
                                            مشتریان از کالا</Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <LocalShippingTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        ارسال توسط فروشگاه آنلاین لبخند
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <VerifiedUserTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        گارانتی الماس به مدت 18 ماه
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                {(41600000).toLocaleString()}
                                تومان
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Button variant="contained">افزودن به سبد خرید</Button>
                            </TableCell>
                        </TableRow>

                        <TableRow className={classes.row}>
                            <TableCell component="th" scope="row" className={classes.cell}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <img src="/images/logoGroup.png" alt="Symbol" className={Style.symbol}/>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.typographyFa}>
                                            فروشگاه موبایل پاسارگارد قشم
                                        </Typography>
                                        <Typography className={classes.typographyComment}>عملکرد: 5 از 5 | 87.5% رضایت
                                            مشتریان از کالا</Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <LocalShippingTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        ارسال توسط شرکت شلمان موشه
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <VerifiedUserTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        گارانتی پارسیان به مدت 18 ماه
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                {(41600000).toLocaleString()}
                                تومان
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Button variant="contained">افزودن به سبد خرید</Button>
                            </TableCell>
                        </TableRow>

                        <TableRow className={classes.row}>
                            <TableCell component="th" scope="row" className={classes.cell}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <img src="/images/android.png" alt="Symbol" className={Style.symbol}/>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.typographyFa}>
                                            فروشگاه موبایل پایتخت
                                        </Typography>
                                        <Typography className={classes.typographyComment}>
                                            عملکرد: 5 از 5 | 87.5% رضایت
                                            مشتریان از کالا
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <LocalShippingTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        ارسال توسط فروشگاه آنلاین لبخند
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Box display="flex" alignItems="center">
                                    <Box>
                                        <VerifiedUserTwoToneIcon fontSize="small" className={classes.icon}/>
                                    </Box>
                                    <Box>
                                        گارانتی الماس به مدت 18 ماه
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                {(41600000).toLocaleString()}
                                تومان
                            </TableCell>
                            <TableCell align="right" className={classes.typographyFa}>
                                <Button variant="contained">افزودن به سبد خرید</Button>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}