import { AiToolsGrid } from '@/components/AiToolsGrid'
import { aiTools } from '@/data/aiTools'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-2'>
      <AiToolsGrid tools={aiTools} />
    </main>
  )
}
