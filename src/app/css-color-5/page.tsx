'use client'

import { Code } from '../components/Code'
import { Examples } from '../components/Examples'
import { usePrism } from '../util/usePrism'

export default function Page() {
  usePrism()

  return (
    <Examples>
      <h3>CSS Color Module Level 5</h3>
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
    title: 'color-mix()',
    code: `
.colors {
    background: color-mix(white, blue);
}
  `,
  },
  {
    title: 'color-mix() with specified color space',
    code: `
.colors {
    background: color-mix(in lch, white, blue);
}
  `,
  },
  {
    title: 'color-contrast()',
    code: `
.colors {
    background: color-contrast(black vs #FFF, #A6A6A6, #5A5A5A, #282828, #000);
}
  `,
  },
  {
    title: 'color-contrast() with currentcolor',
    code: `
.colors {
    color: #FFF;
    background: color-contrast(currentcolor vs #000, #FFF);
}
  `,
  },
  {
    title: 'relative colors',
    code: `
.colors {
    --color: #FF0000;
    background: rgb(from var(--color) r g b / 1);
}
  `,
  },
  {
    title: 'relative colors with calc()',
    code: `
.colors {
    --color: #FF0000;

    background: rgb(from var(--color) calc(r - 50%) g b / 1);
    background: color: hsl(from var(--color) calc(h + 180deg) s l / calc(alpha - 50%));
}
  `,
  },
  {
    title: 'relative colors with calc() and currentcolor',
    code: `
.colors {
    background: color: hsl(from var(--currentcolor) h calc(s - 10%) calc(l - 20%) / calc(alpha - 10%));
}
  `,
  },
]
