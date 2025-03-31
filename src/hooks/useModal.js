import { useEffect, useRef } from "react"

export default function useModal(close){
    const ref = useRef()
  useEffect(() => {

    function handleClick(e){
      if(ref.current && !ref.current.contains(e.target)){
        close()
      }}
    document.addEventListener("click" , handleClick  , true)
    return () => document.removeEventListener("click" , handleClick)
    
  }, [close])
  return ref
}
