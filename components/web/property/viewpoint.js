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
                    <Tab label="نقد و بررسی" {...a11yProps(0)} className={classes.tab}/>
                    <Tab label="مشخصات" {...a11yProps(1)} className={classes.tab}/>
                    <Tab label="دیدگاه کاربران" {...a11yProps(2)} className={classes.tab}/>
                    <Tab label="پرسش و پاسخ" {...a11yProps(3)} className={classes.tab}/>
                </Tabs>
            </Box>
            <div className={Style.panelM}>
                <div className={Style.panelN}>
                    <TabPanel value={value} index={0} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                بررسی اجمالی محصول
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyEn}>
                                Samsung Galaxy A12 SM-A125F/DS Dual SIM 64GB Mobile Phone.
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyText}>
                                گوشی A12 یکی دیگر از میان رده‌های شرکت سامسونگ است که در تاریخ 24 نوامبر 2020 معرفی شد.
                                شرکت
                                سامسونگ برای این محصول خود از یک صفحه‌نمایش 6.5 اینچی با رزولوشن 1600 در 720 پیکسل،
                                استفاده
                                کرده است. این صفحه‌نمایش در هر اینچ 264 پیکسل را نشان می‌دهد که از جزئیات و وضوح تصویر
                                خوبی
                                برخوردار است. تراشه‌ این محصول Mediatek MT6765 Helio P35 از تراشه‌های ۱۲ نانومتری
                                سامسونگ
                                است که با پردازنده مرکزی هشت هسته‌ای Cortex-A55 و پردازنده گرافیکی PowerVR GE8320 همراه
                                شده
                                است. این تراشه برای بازکردن چندین برنامه به‌صورت هم‌زمان و تماشای ویدئو مناسب است. این
                                گوشی
                                با 4 گیگابایت رم و 64 گیگابایت حافظه داخلی عرضه شده است و با استفاده از یک کارت حافظه‌ی
                                جانبی قادر خواهید بود. بر روی قاب پشتی A12 یک دوربین چهارگانه قرار گرفته است. یک لنز
                                عریض با
                                رزولوشن 48 مگاپیکسل، یک لنز فوق عریض با رزولوشن 5 مگاپیکسل، یک لنز ماکرو با رزولوشن 2
                                مگاپیکسل و یک حسگر عمق 2 مگاپیکسلی مجموعه دوربین A12 را تشکیل می‌دهد. برای دوربین سلفی
                                هم یک
                                لنز 8 مگاپیکسلی از نوع عریض انتخاب شده است که در گوشه بالای صفحه‌نمایش قرار گرفته است.
                                منبع
                                انرژی گوشی A12 یک باتری لیتیوم-پلیمری با ظرفیت 5000 میلی‌آمپرساعت است که از فناوری شارژ
                                سریع
                                15 واتی هم پشتیبانی می‌کند .
                            </Typography>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                مشخصات محصول
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
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
                                        مشخصات عمومی :
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        ابعاد
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        164x75.8x8.9 میلی‌متر
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
                                        توضیحات سیم کارت
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        سایز نانو (8.8 × 12.3 میلی‌متر)
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
                                        وزن
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        205 گرم
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
                                        ساختار بدنه
                                    </Typography>
                                </Box>
                                <Box className={Style.property}>
                                    <Typography className={classes.typographyFa}>
                                        قاب پشتی و فریم از پلاستیک
                                    </Typography>
                                </Box>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir="rtl">
                        <div>
                            <Typography className={classes.typographyFa}>
                                دیدگاه و امتیاز کاربران
                            </Typography>
                        </div>
                        <div>
                            <Typography className={classes.typographyFa}>
                                گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
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
                                    <Typography className={classes.typographyFaBo}>از 6</Typography>
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
                                        className={classes.typographyFaSm}><span>کیفیت ساخت : </span><span>4</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={70}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>ارزش خرید به نسبت قیمت : </span><span>4.2</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={75}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>نوآوری : </span><span>3.7</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={65}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>امکانات و قابلیت ها : </span><span>4.5</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={80}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>سهولت استفاده : </span><span>4</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={70}/>
                                </div>
                                <Divider/>
                                <div className={classes.space}>
                                    <Typography
                                        className={classes.typographyFaSm}><span>طراحی و ظاهر : </span><span>3</span></Typography>
                                    <BorderLinearProgress variant="determinate" value={50}/>
                                </div>

                                <div className={classes.space} style={{marginTop: '2vw'}}>
                                    <Typography className={classes.typographyFa}
                                                style={{fontSize: '0.8vw'}}><ThumbsUpDownIcon/>
                                        دیدگاه خود را درباره این کالا بیان کنید.
                                    </Typography>
                                </div>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button}>افزودن
                                        دیدگاه</Button>
                                </div>

                            </div>
                            <div className={Style.panelL}>
                                <Box display="flex" alignItems="center" style={{margin: '1.3vw'}}>
                                    <NewReleasesIcon style={{color: '#CCFF00'}}/>
                                    <Typography className={classes.typographyFa}>بیش از ۴۷۰ نفر از خریداران این محصول را
                                        پیشنهاد داده‌اند</Typography>
                                </Box>
                                <Divider/>
                                <Box style={{margin: '1vw'}}>
                                    <Sort/>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <FeedbackIcon fontSize="small"/>
                                    <Typography className={classes.typographyFa}>
                                        بسیار عالی
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.typographyFaSm}
                                                style={{borderBottom: '2px solid red'}}>
                                        آرش سلوکی
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        خریدار
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        1399/9/12
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1.5vw', color: 'green'}}>
                                    <ThumbUpIcon fontSize="small"/>
                                    <Typography className={classes.typographyFaSm}>
                                        خرید این محصول را توصیه می‌کنم.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        من از کارکرد و باتریش خیلی راضی هستم و توصیه میکنم
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                    <Typography className={classes.typographyFaSm}>
                                        آیا این دیدگاه برایتان مفید بود؟
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
                                        متوسط
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Typography className={classes.typographyFaSm}
                                                style={{borderBottom: '2px solid red'}}>
                                        میترا تهرانی
                                    </Typography>
                                    <FiberManualRecordIcon style={{fontSize: '0.5vw'}}/>
                                    <Typography className={classes.typographyFaSm}>
                                        خریدار
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
                                        خرید این محصول را توصیه نمی‌کنم.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.typographyFa}>
                                        از دو روز استفاده اینو فهمیدمم که دوربین واقعا ضعیف و بی کیفیتی داره و توی پخش
                                        صدا
                                        ضعیفه
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                    <Typography className={classes.typographyFaSm}>
                                        آیا این دیدگاه برایتان مفید بود؟
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
                                    پرسش و پاسخ در مورد محصول
                                </Typography>
                            </div>
                            <div>
                                <Typography className={classes.typographyFa}>
                                    گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
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
                                                label={<Typography className={classes.checkBox}>پرسش های پاسخ داده
                                                    شده</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={state.checkedB} onChange={handleChangeTik}
                                                                   name="checkedB"/>}
                                                label={<Typography className={classes.checkBox}>پرسش های بی
                                                    پاسخ</Typography>}
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
                                                label={<Typography className={classes.checkBox}>پرسش های
                                                    من</Typography>}
                                            />
                                        </FormGroup>
                                        <Divider style={{width: '100%', marginTop: '1vw', marginBottom: '1vw'}}/>
                                        <div>
                                            <Typography className={classes.typographyFaSm}>پرسش خود را در باره این کالا
                                                بیان
                                                کنید.</Typography>
                                        </div>
                                        <div style={{marginTop: '1vw'}}>
                                            <Button variant="contained" color="primary" className={classes.button}>ثبت
                                                پرسش</Button>
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
                                            سلام این گوشی حسگر اثر انگشت داره؟کجاشه؟ ممنون میشم اگه هرچه زود تر پاسخ
                                            دهید
                                            چون قصد خرید شو دارم.
                                        </Typography>
                                    </Box>
                                    <Box display="flex">
                                        <RecordVoiceOverTwoToneIcon/>
                                        <Typography className={classes.typographyFa} style={{color: 'grey'}}>
                                            اول از همه نخر روش پونصد بزار نوت ۹ اس شیایومی بخر بعد این چیز مهمی نیست مهم
                                            این
                                            که اثر انگشت ضعیفه
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.typographyFaSm} style={{color: 'slategray'}}>
                                            <BorderColorTwoToneIcon style={{fontSize: '1vw', marginLeft: '0.2vw'}}/>
                                            الناز مبین
                                        </Typography>
                                        <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                            <Typography className={classes.typographyFaSm}>
                                                آیا این پاسخ برایتان مفید بود؟
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
                                                <Typography className={classes.typographyFa}>مشاهده پاسخ های دیگر
                                                    ...</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box display="flex" style={{width: '100%'}}>
                                                    <RecordVoiceOverTwoToneIcon/>
                                                    <Typography className={classes.typographyFa}
                                                                style={{color: 'grey'}}>
                                                        سلام حسگر اثر انگشت داره ولی در دکمه ی پاور اون هست که بسیار شیک
                                                        و
                                                        زیباست
                                                    </Typography>
                                                </Box>
                                                <div>
                                                    <Typography className={classes.typographyFaSm}
                                                                style={{color: 'slategray'}}>
                                                        <BorderColorTwoToneIcon
                                                            style={{fontSize: '1vw', marginLeft: '0.2vw'}}/>
                                                        فرزاد سربلند
                                                    </Typography>
                                                </div>
                                                <Box display="flex" alignItems="center" style={{marginTop: '1vw'}}>
                                                    <Typography className={classes.typographyFaSm}>
                                                        آیا این پاسخ برایتان مفید بود؟
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
                                گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت
                            </Typography>
                        </Box>
                        <Divider/>
                        <Box display="flex" alignItems="center">
                            <Box style={{width: '3vw'}}>
                                <img src="/images/smiles.png" alt="Symbol" className={Style.symbol}/>
                            </Box>
                            <Box style={{width: '16vw'}}>
                                <Typography className={classes.typographyFa}>
                                    شرکت تبسم خاورمیانه پارسه
                                </Typography>
                            </Box>
                        </Box>
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
                        <Box display="flex" justifyContent="flex-end" style={{width: '100%'}}>
                            <Typography className={classes.typographyCost}>
                                {(47000000).toLocaleString()}
                                تومان
                            </Typography>
                        </Box>
                        <Box>
                            <Button variant="contained">افزودن به سبد خرید</Button>
                        </Box>
                    </Paper>
                </div>
            </div>
        </div>
    );
}
