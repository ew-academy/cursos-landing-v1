import React from "react"

import Icons from "./icons"
import links from "./content"
import { Links, Link, IconWrapper } from "./styled"

const SocialLinks = () => (
  <>
    <Links>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <div key={i}>
            <Link
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </Link>
          </div>
        )
      })}
    </Links>
  </>
)

export default SocialLinks
