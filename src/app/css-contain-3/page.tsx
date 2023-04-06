'use client'

import { Code } from '../components/Code'
import { Examples } from '../components/Examples'
import { usePrism } from '../util/usePrism'

export default function Page() {
  usePrism()

  return (
    <Examples>
      <h3>CSS Containment Module Level 3</h3>
    </Examples>
  )
}
