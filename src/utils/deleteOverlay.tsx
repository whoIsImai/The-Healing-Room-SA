import { useEffect, useState } from 'react'

export default function Overlay({ show, message }: { show: boolean; message: string }) {
  const [visible, setVisible] = useState(show)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-lg font-medium">
        {message}
      </div>
    </div>
  )
}
