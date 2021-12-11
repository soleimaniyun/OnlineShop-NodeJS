import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Box from "@material-ui/core/Box";
import WidgetsTwoToneIcon from '@material-ui/icons/WidgetsTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import Products from "./products";
import Groups from "./groups";
import Property from "./properties";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '2%',
        //backgroundColor: 'none',
    },
    toggleButtonLabel: {
        width:'10vw',
    },
    title: {
        fontSize: '0.9vw',
        padding: '0.5vw',
    },
    section: {
        width: '80vw',
        padding: '2vw',
        margin: 'auto 2vw',
        //backgroundColor: 'orange',
    },
}));

export default function Setting() {

    const classes = useStyles();
    const [view, setView] = React.useState('Goods');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };


    const handleSection = () => {
        switch(view) {
            case 'Goods':
                return <Products/>
            case 'Properties':
                return <Property/>
            case 'Groups':
                return <Groups/>
            default:
                return <Products/>
        }
    }

    return (
        <React.Fragment>
            <Box display="flex" className={classes.root}>
                <Box>
                    <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                        <ToggleButton value="Goods" aria-label="Goods">
                            <Box display="flex" alignItems="center" className={classes.toggleButtonLabel}>
                                <Box width="20%">
                                    <WidgetsTwoToneIcon/>
                                </Box>
                                <Box>
                                    <Typography>معرفی محصولـات</Typography>
                                </Box>
                            </Box>
                        </ToggleButton>
                        <ToggleButton value="Property" aria-label="Property">
                            <Box display="flex" alignItems="center" className={classes.toggleButtonLabel}>
                                <Box width="20%">
                                    <AssignmentTwoToneIcon/>
                                </Box>
                                <Box>
                                    <Typography>مشخصات کالـا</Typography>
                                </Box>
                            </Box>
                        </ToggleButton>
                        <ToggleButton value="Groups" aria-label="Groups">
                            <Box display="flex" alignItems="center" className={classes.toggleButtonLabel}>
                                <Box width="20%">
                                    <AccountTreeTwoToneIcon/>
                                </Box>
                                <Box>
                                    <Typography>دسته بندی ها</Typography>
                                </Box>
                            </Box>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <div className={classes.section}>
                    <Box>
                        {handleSection}
                    </Box>
                </div>
            </Box>
        </React.Fragment>
    )
}