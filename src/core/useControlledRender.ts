import {useState} from 'react'

export const useControlledRender = () => { // const renderRunFn = useControlledRender()
  const [, updateState] = useState({})
  return () => updateState({});
}
