'use client'

import dynamic from 'next/dynamic'
import type { AiTool } from '@/data/aiTools'

export const AiToolsTable = dynamic(() => import('./AiToolsTable'), {
  ssr: false
}) 