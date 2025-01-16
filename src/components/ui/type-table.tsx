"use client"

import * as React from "react"
import { InfoIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface TypeTableProps extends React.HTMLAttributes<HTMLDivElement> {
  type: Record<string, {
    description?: React.ReactNode
    type: string
    typeDescription?: React.ReactNode
    typeDescriptionLink?: string
    default?: string
  }>
}

function Info({ children }: { children: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger>
        <InfoIcon className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
        {children}
      </PopoverContent>
    </Popover>
  )
}

export function TypeTable({ type, className, ...props }: TypeTableProps) {
  return (
    <div 
      className={cn(
        "prose my-6 overflow-auto prose-no-margin rounded-xl border bg-background",
        className
      )}
      {...props}
    >
      <table className="w-full whitespace-nowrap text-sm text-muted-foreground">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="w-[45%] p-4 text-left">Prop</th>
            <th className="w-[30%] p-4 text-left border-l">Type</th>
            <th className="w-1/4 p-4 text-left border-l">Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <tr key={key} className="border-b last:border-0">
              <td className="p-4">
                <div className="inline-flex flex-row items-center gap-1">
                  <code className="rounded-md bg-primary/10 p-1 text-primary">
                    {key}
                  </code>
                  {value.description && <Info>{value.description}</Info>}
                </div>
              </td>
              <td className="p-4 border-l">
                <div className="inline-flex flex-row items-center gap-1">
                  <code className="rounded-md bg-secondary p-1 text-secondary-foreground">
                    {value.type}
                  </code>
                  {value.typeDescription && <Info>{value.typeDescription}</Info>}
                  {value.typeDescriptionLink && (
                    <Link href={value.typeDescriptionLink}>
                      <InfoIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </td>
              <td className="p-4 border-l">
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