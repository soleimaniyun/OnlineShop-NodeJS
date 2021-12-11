import prisma from '../../../lib/prisma';

async function authenticate(xUsername, xPassword, xScope, res, req) {

    const jwt = require('jsonwebtoken');

    const validateUser = await prisma.$queryRaw`SELECT UAR_ID, Account_Status FROM user_account_registry WHERE User_Name = ${xUsername} And Password = PASSWORD(${xPassword});`

    if (validateUser.length === 0) {

        res.statusCode = 401
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify({ message: 'عنوان کاربری و یا رمز عبور ، صحیح نمی باشد.' , status: 0 }))

    } else {

        const privateKey = process.env.SECRET_KEY
        const token = jwt.sign({ UID: validateUser[0].UAR_ID }, privateKey );

        const getScope  = await prisma.$queryRaw`SELECT ASR_ID FROM access_scope_registry WHERE UAR_ID = ${validateUser[0].UAR_ID} AND SCP_ID = ${xScope} ;`

        if (getScope.length === 0) {

            res.statusCode = 401
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.end(JSON.stringify({ message: 'حساب کاربری وارد شده ، فاقد مجوز دسترسی در حوزه انتخاب شده می باشد.' , status: 0 }))

        } else {

            const tokenUpdate = await prisma.$queryRaw`UPDATE user_account_registry SET Authentication_Token = ${token} WHERE UAR_ID = ${validateUser[0].UAR_ID} ;`

            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            //res.cookie('AuthenticationToken', token);
            res.end(JSON.stringify({ message: 'مجوز ورود صادر گردید.' , status: 1 , TOKEN: token , UAR_ID : validateUser[0].UAR_ID}))

        }

    }

}

export default async function SignIn(req, res) {

    //let Param = req.query

    let Data = req.body

    if (req.method === 'POST') {

        await authenticate(Data.username, Data.password, Data.scope, res, req)

    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }

}
