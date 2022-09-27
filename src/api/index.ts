import axios from 'axios'
import { useEffect, useState } from 'react'

type Props = {
  endpoint: string
}

const useGetAxios = ({ endpoint }: Props) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState(null)

  const fetchData = () => {
    setError(null)
    setLoading(true)

    axios
      .get(endpoint)
      .then((res) => {
        setData(res.data)
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error, refetch: fetchData }
}

export { useGetAxios }
