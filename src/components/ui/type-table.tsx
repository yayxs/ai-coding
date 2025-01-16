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
  }>
}

export function TypeTable({ type, className, ...props }: TypeTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-background", className)} {...props}>
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="w-[50%] p-4 text-left font-medium">Tool</th>
            <th className="w-[50%] p-4 text-left font-medium border-l">Platform</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <tr key={key} className="border-b last:border-0">
              <td className="p-4">
                <div className="flex flex-row items-center gap-2">
                  <a
                    href={value.typeDescriptionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <code className="rounded-md bg-primary/10 p-1 text-primary">
                      {key}
                    </code>
                  </a>
                  {value.description}
                </div>
              </td>
              <td className="p-4 border-l">
                <code className="rounded-md bg-secondary p-1 text-secondary-foreground">
                  {value.type}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 