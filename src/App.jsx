import './App.css'
import Header from './components/common/Header'
import Layout from './components/layouts/Layout'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <Header />
          <div className="flex gap-4">
            <Input placeholder="Enter your name" />
            <Button>Click me</Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default App
