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
        height: '20vw',
        width: '17.5vw',
        overflowY: 'scroll',
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

const searchStyles = makeStyles((theme) => ({
    root: {
        padding: '0.2vw 0.4vw',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginRight: '0.2vw',
        flex: 1,
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    iconButton: {
        padding: '0.3vw',
    },
    divider: {
        height: '4vw',
        margin: '1vw',
    },
}));

export default function Brands() {
    const classes = useStyles();
    const search = searchStyles();

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
                        <Typography className={classes.heading}>برنـدهای محصول</Typography>
                    </div>
                </AccordionSummary>
                <Divider className={classes.divide}/>
                <AccordionDetails style={{paddingTop: 0}}>
                    <div className={classes.div}>
                        <Box borderRadius="0.5vw" border={1} borderColor="#ff9800" component="form"
                             className={search.root}>
                            <InputBase
                                className={search.input}
                                placeholder="جستجوی عنوان برند "
                                inputProps={{'aria-label': 'search'}}
                            />
                            <IconButton type="submit" className={search.iconButton} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                        </Box>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Divider className={classes.divider}/>
                            <FormGroup>
                                <div className={classes.formGroup}>
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={jason} onChange={handleChange} name="jason"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>مایکروسافت</Typography>
                                                <Typography className={classes.heading}>Microsoft</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={jason} onChange={handleChange} name="jason"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>مایکروسافت</Typography>
                                                <Typography className={classes.heading}>Microsoft</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={jason} onChange={handleChange} name="jason"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>مایکروسافت</Typography>
                                                <Typography className={classes.heading}>Microsoft</Typography>
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.formControlLabel}
                                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine"/>}
                                        label={
                                            <Box display="flex" justifyContent="space-between" className={classes.box}>
                                                <Typography className={classes.heading}>هاکوپیان</Typography>
                                                <Typography className={classes.heading}>Hacopian</Typography>
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