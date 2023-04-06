'use client'

import { useEffect, useState } from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import './globals.css'

import { usePrism } from './util/usePrism'

export default function RootLayout({ children }) {
  usePrism()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
