import { NextPage } from "next"
import Template from "~/templates/signin"
import {
  withAuthUserTokenSSR,
  withAuthUser,
  AuthAction,
} from "next-firebase-auth"

const Page: NextPage<{}> = () => {
  return (
    <>
      <main>
        <Template />
      </main>
      <style jsx>
        {`
          main {
            display: flex;
            align-items: flex-start;
          }
          @media screen and (min-width: 450px) {
            main {
              align-items: center;
              justify-content: center;
              min-height: 100vh;
            }
          }
        `}
      </style>
    </>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Page)