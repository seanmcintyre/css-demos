import { useEffect, useState } from 'react'
import Prism from 'prismjs'

export function usePrism() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}
