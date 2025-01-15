/// <reference types="next" />
/// <reference types="next/image-types/global" />

import type { ReactNode } from 'react'

declare module 'react' {
  export type FC<P = {}> = React.FunctionComponent<P>
  export type ReactNode = React.ReactNode
  export type KeyboardEvent<T = Element> = React.KeyboardEvent<T>
  
  interface JSX {
    IntrinsicElements: any
  }
} 