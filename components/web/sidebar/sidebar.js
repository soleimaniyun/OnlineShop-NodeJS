import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import CasinoIcon from '@material-ui/icons/Casino';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    speedDial: {
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    title: {
        fontSize: '0.7vw',
        fontFamily: 'IRANSans',
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGoTop = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#Header"
        );
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        setOpen(false);
    };

    return (
        <div className="sidebar">
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon icon={<TouchAppIcon />} openIcon={<EmojiObjectsTwoToneIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >

                <SpeedDialAction
                    key='1'
                    icon={<KeyboardArrowUpIcon />}
                    tooltipTitle={<Typography color="inherit" className={classes.title}>انتقال به ابتدای صفحه</Typography>}
                    onClick={handleGoTop}
                />

                <SpeedDialAction
                    key='2'
                    icon={<ShoppingCartIcon />}
                    tooltipTitle={<Typography color="inherit" className={classes.title}>مشاهده سبد خرید</Typography>}
                    onClick={handleClose}
                />

                <SpeedDialAction
                    key='3'
                    icon={<CasinoIcon />}
                    tooltipTitle={<Typography color="inherit" className={classes.title}>بخت آزمایی</Typography>}
                    onClick={handleClose}
                />

                <SpeedDialAction
                    key='4'
                    icon={<SupervisedUserCircleIcon />}
                    tooltipTitle={<Typography color="inherit" className={classes.title}>راهنما</Typography>}
                    onClick={handleClose}
                />

            </SpeedDial>
        </div>
    );
}
