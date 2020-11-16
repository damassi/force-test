import { NextApiRequest, NextApiResponse } from "next"
import { UserSessionData } from "next/lib/user"
import { getTokenCookie } from "next/lib/cookies"
import { decryptSession } from "next/lib/session-encryption"

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const cookie = getTokenCookie(req)
  const session: UserSessionData = cookie && (await decryptSession(cookie))

  // After getting the session you may want to fetch for the user instead
  // of sending the session's payload directly
  res.status(200).json({ user: session || null })
}
