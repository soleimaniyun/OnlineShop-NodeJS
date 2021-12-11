import React from 'react'
import Crumbs from './crumbs'
import Toolbar from './toolbar';
import ProductInfo from './productInfo';
import SellInfo from './sellInfo';
import Style from '../../../styles/web/property.module.css';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import SellerList from "./sellerList";
import Related from './related';
import Viewpoint from './viewpoint';

const useStyles = makeStyles({
    paper: {
        margin: '0.5vw',
        padding: '0.2vw',
    },
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
    },
    typographyEn: {
        direction: 'ltr',
        fontFamily: 'SansItalic',
        fontSize: '0.9vw',
        textAlign: 'right',
    },
    link: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
    },
});

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Property(props) {

    const classes = useStyles();

    return (
        <div>
            <Crumbs/>
            <NoSsr>
                <div className={Style.panelA}>
                    <div className={Style.panelB}>
                        <div className={Style.panelD}>
                            <div className={Style.panelE}>
                                <Toolbar/>
                            </div>
                            <div className={Style.panelF}>
                                <img src="/gallery/products/samsungA12_4.jpg" alt="Product image."
                                     className={Style.image}/>
                            </div>
                        </div>
                        <div className={Style.panelG}>
                            <Paper className={classes.paper}>
                                <img src="/gallery/products/samsungA12_3.jpg" alt="Product image."
                                     className={Style.thumbnail}/>
                            </Paper>
                            <Paper className={classes.paper}>
                                <img src="/gallery/products/samsungA12_5.jpg" alt="Product image."
                                     className={Style.thumbnail}/>
                            </Paper>
                            <Paper className={classes.paper}>
                                <img src="/gallery/products/samsungA12_6.jpg" alt="Product image."
                                     className={Style.thumbnail}/>
                            </Paper>
                            <Paper className={classes.paper}>
                                <img src="/gallery/products/samsungA12_1.jpg" alt="Product image."
                                     className={Style.thumbnail}/>
                            </Paper>
                            <Paper className={classes.paper}>
                                <img src="/gallery/products/samsungA12_2.jpg" alt="Product image."
                                     className={Style.thumbnail}/>
                            </Paper>
                        </div>
                    </div>
                    <div className={Style.panelC}>

                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                                سامسونگ
                            </Link>
                            <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                                گوشی موبایل سامسونگ
                            </Link>
                        </Breadcrumbs>
                        <Typography className={classes.typographyFa}>
                            گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
                        </Typography>

                        <Typography className={classes.typographyEn}>
                            Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                        </Typography>

                        <div className={Style.panelH}>
                            <div className={Style.partA}>
                                <ProductInfo/>
                            </div>
                            <div className={Style.partB}>
                                <SellInfo/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.panelI}>
                    <SellerList/>
                    <Related/>
                    <Viewpoint/>
                </div>


            </NoSsr>

            {/*{props.PID}*/}

        </div>
    )
}