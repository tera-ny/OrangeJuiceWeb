import initAuth from "~/modules/nextauth"
import { getFirebaseAdmin } from "next-firebase-auth"
import { SerializableVideo, Video } from "~/modules/entity"
import { firestore } from "firebase-admin"

initAuth()

export interface Response {
  contentIDs: string[]
  contents: SerializableVideo[]
}

const handler = async (uid: string): Promise<Response> => {
  try {
    const snapshot = await getFirebaseAdmin()
      .firestore()
      .collection("contents")
      .where("type", "==", "video")
      .where("owner", "==", uid)
      .where("draft", "==", false)
      .orderBy("createdAt", "desc")
      .get()
    const contentIDs = snapshot.docs.map((doc) => doc.id)
    const contents = snapshot.docs.map(
      (doc): SerializableVideo => {
        const data = doc.data() as Video<firestore.Timestamp>
        return {
          id: doc.id,
          title: data.title ?? null,
          url: data.url ?? null,
          poster: data.poster ?? null,
          createdAtMillis: data.createdAt.toMillis() ?? null,
        }
      }
    )
    return {
      contentIDs,
      contents,
    }
  } catch (error) {
    console.error(error)
    throw 500
  }
}

export default handler
