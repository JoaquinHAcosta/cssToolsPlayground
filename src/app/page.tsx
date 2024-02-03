'use client'

import Button from '@/components/ui/Button'
import { clsx } from 'clsx'

function Homepage() {
  const value = 11

  return (
    <div>
      <Button
        className={clsx({
          'bg-green-500 hover:bg-green-600': value > 10,
          'bg-yellow-500 hover:bg-yellow-600': value === 10,
          'bg-blue-500 hover:bg-blue-600': value < 10,
        })}
        type="button"
        onClick={() => alert('Test')}
      >
        Click me
      </Button>
    </div>
  )
}

export default Homepage
