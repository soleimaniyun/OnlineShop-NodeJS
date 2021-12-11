import React from 'react'
import {Typography} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    typographyFa: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        color:  '#686868',
    },
    typographyEn: {
        direction: 'ltr',
        fontFamily: 'SansItalic',
        fontSize: '0.8vw',
        textAlign: 'right',
    },
    iconColorA: {
        color: 'orange',
        marginLeft: '0.4vw',
    },
    iconColorB: {
        color: 'orangered',
        marginLeft: '0.4vw',
    },
    iconMar: {
        marginRight: '0.5vw',
        color: 'grey',
    },
    iconWar: {
        marginLeft: '0.5vw',
        color: 'grey',
    },
    boxTop: {
        marginTop: '0.5vw',
    },
    itemTitle: {
        fontFamily: 'IRANSans',
        fontSize: '0.9vw',
        fontWeight: 'bold',
        marginBottom: '0.3vw',
        marginTop: '1vw',
        color:  '#686868',
    },

});

export default function ProductInfo() {

    const classes = useStyles();

    return(
        <div className={classes.boxTop}>
            <Box display="flex">
                <StarIcon className={classes.iconColorA} fontSize="small" />
                <Typography className={classes.typographyFa}>4.8</Typography>
                <StopRoundedIcon className={classes.iconMar} fontSize="small" />
                <Typography className={classes.typographyFa}>210 دیدگاه کاربران</Typography>
                <StopRoundedIcon className={classes.iconMar} fontSize="small" />
                <Typography className={classes.typographyFa}>23 پرسش و پاسخ</Typography>
            </Box>

            <Box display="flex">
                <LoyaltyRoundedIcon className={classes.iconColorB} fontSize="small" />
                <Typography className={classes.typographyFa}>تعداد 120 نفر توصیه خرید این کالا را نموده اند.</Typography>
            </Box>

            <Box  className={classes.boxTop} >
            <Typography className={classes.itemTitle}>رنگ : سبز کبریتی روشن</Typography>
            <Box>
                <RadioButtonCheckedIcon className={classes.iconMar} style={{color:'#20B2AA'}} fontSize="large" />
                <FiberManualRecordIcon className={classes.iconMar} style={{color:'#FF1493'}} fontSize="large" />
                <FiberManualRecordIcon className={classes.iconMar} style={{color:'whitesmoke'}} fontSize="large" />
                <FiberManualRecordIcon className={classes.iconMar} style={{color:'#000000'}} fontSize="large" />
            </Box>
            </Box>

            <Box className={classes.boxTop} >
                <Typography className={classes.itemTitle}>ویژگی کالا :</Typography>
                <Box>
                    <Typography className={classes.typographyFa}>
                        <ul>
                            <li>
                                حافظه داخلی:
                                64 گیگابایت
                            </li>
                            <li>
                                شبکه های ارتباطی:
                                4G، 3G، 2G
                            </li>
                            <li>
                                دوربین‌های پشت گوشی:
                                4 ماژول دوربین
                            </li>
                            <li>
                                سیستم عامل:
                                Android
                            </li>
                            <li>
                                توضیحات سیم کارت:
                                سایز نانو (8.8 × 12.3 میلی‌متر)
                            </li>
                            <li>
                                <a>+ مشاهده بیشتر</a>
                            </li>
                        </ul>
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.boxTop} display="flex" alignItems="center">
                <Box className={classes.iconWar}>
                    <InfoIcon />
                </Box>
                <Box>
                    <Typography className={classes.typographyFa}>
                        هشدار سامانه همتا: حتما در زمان تحویل دستگاه، به کمک کد فعال‌سازی چاپ شده روی جعبه یا کارت گارانتی، دستگاه را از طریق #7777*، برای سیم‌کارت خود فعال‌سازی کنید. آموزش تصویری در آدرس اینترنتی hmti.ir/05
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}