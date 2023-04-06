'use client'

import { Code } from '../components/Code'
import { Examples } from '../components/Examples'
import { usePrism } from '../util/usePrism'

export default function Page() {
  usePrism()

  return (
    <Examples>
      <h3>CSS Anchor Positioning</h3>
      <Code language="html">{example_1}</Code>
      <Code language="html">{example_2}</Code>
    </Examples>
  )
}

const example_1 = `
<div class="demo-anchor" anchor="anchor-01"></div>
`

const example_2 = `
.demo-anchor {
    anchor-name: --my-anchor;
  }
`
