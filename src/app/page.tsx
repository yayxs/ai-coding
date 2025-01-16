import { FC } from 'react'
import { AiToolsTable } from '@/components/ClientComponents'
import { aiTools } from '@/data/aiTools'

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-12">
      
      <div className="w-full">
        <AiToolsTable tools={aiTools} />
      </div>
    </div>
  )
}

export default Home 