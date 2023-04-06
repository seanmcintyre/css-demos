import Link from 'next/link'

import styles from './page.module.css'

import { Color4 } from './css-color-4/links'
import { Color5 } from './css-color-5/links'
import { Contain3 } from './css-contain-3/links'
import { Anchor1 } from './css-anchor-1/links'

export const metadata = {
  title: 'The Future of CSS',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Section
        title="CSS Color Module Level 4"
        href="/css-color-4"
        hrefW3C="https://www.w3.org/TR/css-color-4/"
        statusW3C=" W3C Candidate Recommendation Draft, 1 November 2022"
        links={Color4.links}
      >
        <em>notable featutes:</em>
        <br />
        <br />
        color()
        <br />
        currentcolor
        <br />
        lch() and oklch()
        <br />
        @color-profile
        <br />
        hue interpolation
      </Section>

      <Section
        title="CSS Color Module Level 5"
        href="/css-color-5"
        hrefW3C="https://www.w3.org/TR/css-color-5/"
        statusW3C=" W3C Working Draft, 28 June 2022"
        links={Color5.links}
      >
        <em>notable featutes:</em>
        <br />
        <br />
        color-mix()
        <br />
        color-contrast()
        <br />
        Relative Color Syntax (ie. {'from <color>'})
        <br />
        colorspace specification in color()
      </Section>

      <Section
        title="CSS Containment Module Level 3"
        href="/css-contain-3"
        hrefW3C="https://www.w3.org/TR/css-contain-3/"
        statusW3C="W3C Working Draft, 18 August 2022"
        links={Contain3.links}
      >
        <em>notable featutes:</em>
        <br />
        <br />
        @container
        <br />
        style queries
        <br />
        {'@container style(color: hotpink) { }'}
        <br />
        {'@container style(--theme: darkHover) { }'}
        <br />
        {
          '@container (min-width: 420px) and style(--highlight: true) { }'
        }
      </Section>

      <Section
        title="CSS Anchor Positioning"
        href="/css-anchor-1"
        hrefW3C="https://drafts.csswg.org/css-anchor-position-1/"
        statusW3C="Editor's Draft, 21 February 2023"
        links={Anchor1.links}
      >
        <em>notable featutes:</em>
        <br />
        <br />
        html anchor attribute: {'<div anchor="" />'}
        <br />
        anchor()
        <br />
        anchor-size()
        <br />
        anchor-name:
        <br />
        anchor-scroll:
        <br />
        anchor-size:
        <br />
        @position-fallback
      </Section>

      <div className={styles['coming-soon']}>
        <Section
          title="CSS Nesting Module"
          hrefW3C="https://www.w3.org/TR/css-nesting-1/"
          statusW3C="W3C Working Draft, 14 February 2023"
        />

        <Section
          title="CSS Houdini"
          // hrefMDN="https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini"
        />

        <Section
          title="CSS Typed Object Model API"
          hrefW3C="https://www.w3.org/TR/css-typed-om-1/"
          statusW3C="W3C Working Draft, 10 April 2018"
          // hrefMDN="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API"
        />

        <Section
          title="CSS Painting API Level 1"
          hrefW3C="https://www.w3.org/TR/css-paint-api-1/"
          statusW3C="W3C Candidate Recommendation Draft, 16 December 2021"
          // hrefMDN="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API"
          links={[
            {
              href: 'https://css-tricks.com/colorme-css-color-level-4/',
              title: 'CSS-TRICKS: ColorMe / CSS Color Level 4',
            },
          ]}
        />
      </div>
    </main>
  )
}

function Section({
  children,
  href,
  hrefW3C,
  links = [],
  statusW3C,
  title,
}: any) {
  return (
    <div className={styles.section}>
      <h3>{href ? <Link href={href}>{title}</Link> : title}</h3>
      <div>
        <div>
          <a href={hrefW3C}>» W3C: {title} »</a>
          {statusW3C}
        </div>

        <br />

        {children && <div>{children}</div>}
        {links && (
          <div className={styles.links}>
            {links.map((link, i) => (
              <a key={i} href={link.href}>
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
