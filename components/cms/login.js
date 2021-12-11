import React, {useRef} from 'react'
import Style from '../../styles/cms/login.module.css'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NoSsr from "@material-ui/core/NoSsr";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux'
import {getCookieParser} from "next/dist/next-server/server/api-utils";

const CssTextField = withStyles({
    root: {
        '& label': {
            color: 'white',fontSize: '0.8vw',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white', color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white', color: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'whitesmoke', color: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white', color: 'white',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        borderColor: 'white',
    },
    flex: {
        width: '20vw',
        margin: '0.5vw',
    }
}));

export default function Login() {

    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [sys, setSys] = React.useState(1);
    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');

    const Token = useSelector((state) => state.token)
    const dispatch = useDispatch()
    const SaveToken = ( secretCode ) =>
        dispatch({
            type: 'TOKEN',
            token: secretCode,
        })

    const handleSubmit = async event => {

        event.preventDefault()

        const res = await fetch('/api/auth/signin', {
            body: JSON.stringify({
                username: user,
                password: pass,
                scope: sys,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()

        SaveToken(result.TOKEN)

        let x;
        //x = getCookieParser(res);
        console.log(result , x)

        if (result.status === 0) {
            enqueueSnackbar(result.message, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            });
        }
    }

    const handleChange = (event) => {
        setSys(event.target.value);
    };

    const handleUserName = (event) => {
        setUser(event.target.value);
    };

    const handleUserPass = (event) => {
        setPass(event.target.value);
    };

    return (
        <NoSsr>
            <div className={Style.container}>
                <form autoComplete="off" className={Style.login}>

                    <FormControl required className={Style.item} name="username" value={user} onChange={handleUserName}>
                        <CssTextField
                            label="نام کاربری"
                            variant="outlined"
                            id="username"
                            inputProps={{style: {color: 'white'}}}
                            autoComplete="off"
                        />
                    </FormControl>

                    <FormControl required className={Style.item} name="password" value={pass} onChange={handleUserPass}>
                        <CssTextField
                            fullWidth
                            id="password"
                            label="رمز عبور"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            inputProps={{style: {color: 'white'}}}
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={Style.item}>
                        <InputLabel id="select-label">حوزه</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select-scope"
                            value={sys}
                            onChange={handleChange}
                            label="حوزه"
                            MenuProps={{style: {direction: 'rtl'}}}
                        >
                            <MenuItem value="">
                                <em>هیچکدام</em>
                            </MenuItem>
                            <MenuItem value={1}>وب سایت فروشگاه</MenuItem>
                            <MenuItem value={10}>واحد فروش</MenuItem>
                            <MenuItem value={20}>واحد مالی</MenuItem>
                            <MenuItem value={30}>واحد انبار</MenuItem>
                            <MenuItem value={40}>امور مشترکین</MenuItem>
                            <MenuItem value={50}>امور فروشندگان</MenuItem>
                            <MenuItem value={60}>واحد مدیریت</MenuItem>
                            <MenuItem value={70}>پشتیبانی سامانه</MenuItem>
                        </Select>
                    </FormControl>

                    <Box display="flex" justifyContent="center" className={classes.flex}>
                        <FormControl className={Style.button}>
                            <Button
                                className={classes.button}
                                variant="outlined"
                                size="small"
                                onClick={handleSubmit}
                            >
                                ورود به سامانه
                            </Button>
                        </FormControl>

                        <FormControl className={Style.button}>
                            <Button
                                className={classes.button}
                                variant="outlined"
                                size="small"
                            >
                                انصراف
                            </Button>
                        </FormControl>
                    </Box>
                </form>

                <div className={Style.logo}>
                    <img className={Style.icon} src="/images/cms.png" alt="Logo"/>
                    <span className={Style.text}>
                        سامانه مدیریت فروش
                    </span>
                </div>

            </div>
        </NoSsr>
    );
}
