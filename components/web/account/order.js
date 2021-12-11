import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Typography} from "@material-ui/core";
import StopIcon from '@material-ui/icons/Stop';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    table: {
        minWidth: '90%',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
    },
    typographyFaSm: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
    },
});

function createData(no, orderCode, submitDate, cost, pay, status) {
    return {no, orderCode, submitDate, cost, pay, status};
}

const rows = [
    createData(1, '254376894', '1399/7/16', 6500000, 6500000, 'پرداخت موفق'),
    createData(2, '254378694', '1399/7/26', 87900000, 87900000, 'پرداخت موفق'),
    createData(3, '256756694', '1399/9/6', 8809900, 8809900, 'پرداخت موفق'),
    createData(4, '254009894', '1399/11/15', 45676500, 45676500, 'پرداخت موفق'),
    createData(5, '254344476', '1399/12/21', 34000000, 34000000, 'پرداخت موفق'),
];

export default function Order(props) {
    const classes = useStyles();

    return (

        <div>
            <Box display='flex'>
                <StopIcon fontSize='small' style={{margin: 'auto 0.1vw'}} />
                <Typography className={classes.typographyFa} style={{margin: '1vw 0'}}>فهرست آخرین سفارشات</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.typographyFa}>ردیف</TableCell>
                            <TableCell className={classes.typographyFa} align="right">شماره سفارش</TableCell>
                            <TableCell className={classes.typographyFa} align="right">تاریخ ثبت سفارش</TableCell>
                            <TableCell className={classes.typographyFa} align="right">مبلغ قابل پرداخت</TableCell>
                            <TableCell className={classes.typographyFa} align="right">مبلغ کل</TableCell>
                            <TableCell className={classes.typographyFa} align="right">وضعیت پرداخت</TableCell>
                            <TableCell className={classes.typographyFa} align="right">جزییات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.no}>
                                <TableCell component="th" scope="row" className={classes.typographyFa}>
                                    {row.no}
                                </TableCell>
                                <TableCell className={classes.typographyFa} align="right">{row.orderCode}</TableCell>
                                <TableCell className={classes.typographyFa} align="right">{row.submitDate}</TableCell>
                                <TableCell className={classes.typographyFa} align="right">{(row.cost).toLocaleString()}</TableCell>
                                <TableCell className={classes.typographyFa} align="right">{(row.pay).toLocaleString()}</TableCell>
                                <TableCell className={classes.typographyFa} align="right">{row.status}</TableCell>
                                <TableCell align="right"><ChevronLeftIcon/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
