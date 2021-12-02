import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
  return (
    <>
      <header className="container">
        <Link href={"/"}>
          <a className="link">
            <picture>
              <source
                srcSet="/img/logo_full_dark.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                className="logo"
                alt="logo"
                height="60"
                width="220"
                src="/img/logo_full_light.svg"
              />
            </picture>
          </a>
        </Link>
      </header>
      <style jsx>{`
        .container {
          padding: 8px 12px;
        }
        .logo {
          height: 32px;
          width: auto;
        }
        .link {
          display: inline-block;
          height: 32px;
        }
      `}</style>
    </>
  )
}

export default Header
