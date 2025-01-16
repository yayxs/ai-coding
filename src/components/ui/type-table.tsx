"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TypeTableProps extends React.HTMLAttributes<HTMLDivElement> {
  type: Record<string, {
    description?: React.ReactNode
    type: string
    typeDescription?: React.ReactNode
    typeDescriptionLink?: string
    default?: string
  }>
}

export function TypeTable({ type, className, ...props }: TypeTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-background", className)} {...props}>
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="w-[45%] p-4 text-left font-medium">Name & Author</th>
            <th className="w-[30%] p-4 text-left font-medium border-l">Is</th>
            <th className="w-1/4 p-4 text-left font-medium border-l">Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <tr key={key} className="border-b last:border-0">
              <td className="w-[45%] p-4">
                <div className="flex flex-row items-center gap-2">
                  <code className="rounded-md bg-primary/10 p-1 text-primary">
                    {key}
                  </code>
                </div>
              </td>
              <td className="w-[30%] p-4 border-l">
                <div className="flex flex-row items-center gap-2">
                  <code className="rounded-md bg-secondary p-1 text-secondary-foreground">
                    {value.type}
                  </code>
                </div>
              </td>
              <td className="w-1/4 p-4 border-l">
                {value.default ? (
                  <code className="rounded-md bg-secondary p-1 text-secondary-foreground">
                    {value.default}
                  </code>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 