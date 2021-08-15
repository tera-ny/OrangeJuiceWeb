import { FC } from "react"
import auth from "~/stores/auth"
import "firebase/auth"
import "firebase/firestore"
import Player from "~/components/player"
import { Video } from "~/modules/entity"

interface Props {
  video: Video
}

const Index: FC<Props> = ({ video }) => {
  return (
    <>
      <div className={"container"}>
        <div className={"primary"}>
          <div className={"playerContainer"}>
            <Player src={video.url} poster={video.poster} />
          </div>
          <h2 className="title">{video.title}</h2>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 40px 20px 0;
          max-width: 900px;
          display: grid;
        }
        .title {
          font-size: 32px;
          font-weight: medium;
        }
        @media screen and (max-width: 899px) {
          .title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default Index
