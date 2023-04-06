'use client'

import { Code } from '../components/Code'
import { Examples } from '../components/Examples'
import { usePrism } from '../util/usePrism'

export default function Page() {
  usePrism()

  return (
    <Examples>
      <h3>CSS Color Module Level 4</h3>
      <p>Maybe you've heard of Display P3?</p>
      <p>
        Display P3 is a variant of DCI-P3 (used for digital projection
        in the cinema industry). Apple developed Display P3 for use in
        computer display, first released with the 2015 iMac.
      </p>
      <p>Safari has had support for Display P3 since 2017.</p>
      <br />
      <br />
      <p>Lightness vs Luminance</p>
      <p>Saturation vs Chroma</p>
      <p>
        Visualizing paths between two colors in different color
        spaces:{' '}
        <a href="https://codepen.io/web-dot-dev/full/yLqOgda">
          codepen
        </a>
      </p>
      {examples.map(({ title, code }) => (
        <>
          <br />
          <br />
          <h4>{title}</h4>
          <Code language="css">{code}</Code>
        </>
      ))}
    </Examples>
  )
}

const examples = [
  {
    title: 'CSS colors today',
    code: `
.colors {
    background: red;
    background: #F00;
    background: #FF0000;
    background: rgb(255, 0, 0);
    background: rgab(255, 0, 0, 1);
    background: hsl(360, 100%, 50%, 1);
}
  `,
  },
  {
    title: 'Improved syntax flexibility',
    code: `
.colors {
    background: rgb(255 0 0);
}
  `,
  },
  {
    title: 'Alpha values',
    code: `
.colors {
    background: rgb(255 0 0 / 1);
    background: hsl(360deg 100% 50% / 1);
}
  `,
  },
  {
    title: 'currentcolor',
    code: `
.colors {
    color: rgb(255 0 0 / 1);
    background-color: currentcolor;
}
  `,
  },
]
