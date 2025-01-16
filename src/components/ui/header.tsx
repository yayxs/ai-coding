"use client"

import { Github as GitHubIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link
                href="https://github.com/yayxs/ai-coding"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 