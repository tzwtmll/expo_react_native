import { FC, useRef, useState, useEffect } from 'react'
export const useCountDown = (initTime: number) => {
  const timer = useRef<any>()
  const [nums, setNums] = useState<number>(initTime)

  useEffect(() => {
    if (nums <= 0 || nums === 60) {
      goClear()
    }
  }, [nums])

  const goStart = () => {
    timer.current = setInterval(() => {
      setNums((n) => {
        return n - 1
      })
    }, 1000)
  }

  const goClear = () => {
    clearInterval(timer.current)
    setNums(60)
  }
  return { nums, goStart }
}
