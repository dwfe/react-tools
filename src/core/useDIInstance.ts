import {provider} from '@do-while-for-each/provider'
import {useState} from 'react'

export const useDIInstance = <T>(provide: any): [T] => {
  const [instance] = useState(() => provider.get<T>(provide))
  return [instance]
}
