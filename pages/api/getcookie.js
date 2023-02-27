import cookie from "cookie"
import nc from 'next-connect';

const handler = nc();


handler.post(async (req, res) => {

    res.setHeader("Set-Cookie", cookie.serialize("token", req.body.token, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 53000,
        sameSite: "strict",
        path: "/"
    }))
    res.status(200).json({ message: "success" })
})

export default handler