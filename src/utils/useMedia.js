import { useEffect, useState } from "react"
import { window } from "browser-monads"

export default function useMedia(queries, values, defaultValue) {
  const match = () =>
    values[queries.findIndex(q => window.matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  //eslint-disable
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])
  //eslint-enable
  return value
}
