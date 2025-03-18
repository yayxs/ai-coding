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
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white dark:from-gray-900/30 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
  )
}

// 完全删除动态光束和碰撞检测组件
// 删除CollisionMechanism组件
// 删除Explosion组件
