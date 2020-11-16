import { NextApiRequest, NextApiResponse } from "next"
import { setTokenCookie } from "next/lib/cookies"
import { UserSessionData, findUser } from "next/lib/user"
import { encryptSession } from "next/lib/session-encryption"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { username, password, otp } = req.body
    const session: UserSessionData = await findUser({
      username,
      password,
      otp,
    })
    const encryptedSession = await encryptSession(session)
    setTokenCookie(res, encryptedSession)
    res.status(200).send({ done: true })
  } catch (error) {
    console.error(error)
    res.status(401).send(error.message)
  }
}
