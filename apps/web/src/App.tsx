import type { Slot } from '@cardboard-lab/shared'
import { Button } from '@/components/ui/button'

const demo: Slot = {
  id: 's1', name: 'Title', type: 'text',
  x: 5, y: 5, width: 53, height: 10, style: {},
}

export default function App() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">CardBoardLab - {demo.name}</h1>
      <Button>Hello shadcn</Button>
    </main>
  )
}