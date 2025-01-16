import { FC } from 'react'
import { AiToolsTable } from '@/components/ClientComponents'
import { aiTools } from '@/data/aiTools'

const Home: FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AiToolsTable tools={aiTools} />
    </main>
  )
}

export default Home 