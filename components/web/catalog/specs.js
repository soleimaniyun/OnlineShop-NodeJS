import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Divider, FormControl} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    div: {
        width: '100%',
    },
    formControl: {
        paddingTop: '0.8vw',
    },
    formControlLabel: {
        padding: 0,
        margin: 0,
        width: '18vw',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '15vw',
        width: '17.5vw',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    box: {
        width: '13vw',
    },
    divider: {
        width: '100%',
    },
    divide: {
        margin: '0 1vw 0.8vw 1vw',
    },
}));

export default function Specs() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const {gilad, jason, antoine} = state;

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.div}>
                        <Typography className={classes.heading}>ویژه گی محصول</Typography>
                    </div>
                </AccordionSummary>
                <Divider className={classes.divide}/>
                <AccordionDetails style={{paddingTop: 0}}>
                    <div className={classes.div}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <div className={classes.formGroup}>
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>کمتر از 1 کیلو</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={jason} onChange={handleChange} name="jason"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>حدود 10 کیلو</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>بیشتر از 20 کیلو</Typography>
                                            </Box>
                                        }
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}