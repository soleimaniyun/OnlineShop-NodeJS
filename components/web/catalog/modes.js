import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    formControlLabel: {
        marginTop: '0.5vw',
    },
    divider: {
        margin: '0.8vw 0 0.5vw 0',
        width: '18vw',
    },
}));

export default function SwitchesGroup() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.root}>نحوه نمایش محصولات</FormLabel>
            <Divider className={classes.divider} />
            <FormGroup>
                <FormControlLabel
                    className={classes.formControlLabel}
                    control={<Switch size="small" checked={state.gilad} onChange={handleChange} name="gilad" />}
                    label={
                        <Typography className={classes.root}>فقط ارسال سریع</Typography>
                    }
                />
                <FormControlLabel
                    className={classes.formControlLabel}
                    control={<Switch size="small" checked={state.jason} onChange={handleChange} name="jason" />}
                    label={
                        <Typography className={classes.root}>امکان ارسال توسط فروشنده</Typography>
                    }
                />
                <FormControlLabel
                    className={classes.formControlLabel}
                    control={<Switch size="small" checked={state.antoine} onChange={handleChange} name="antoine" />}
                    label={
                        <Typography className={classes.root}>فقط نمایش کالاهای موجود</Typography>
                    }
                />
            </FormGroup>
        </FormControl>
    );
}