'use client'
import { cn } from '../lib/utils'
// import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export const BackgroundBeamsWithCollision = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  // 简化组件，不再需要复杂的ref和状态
  return (
    <div className={cn('relative h-full w-full overflow-hidden', className || '')}>
      <div className='relative z-10'>{children}</div>
      {/* 静态背景替代动态光束 */}
      <div className="absolute inset-0 bg-grid-small-slate-900/[0.04] bg-[center_top_-1px] dark:bg-grid-small-slate-700/[0.05]"></div>
    </div>
  )
}

// 完全删除动态光束和碰撞检测组件
// 删除CollisionMechanism组件
// 删除Explosion组件
