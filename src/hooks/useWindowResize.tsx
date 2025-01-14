import { useEffect,  useState } from "react"

const useWindowResize = () => {
  const [width,setWidth]=useState<number>(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize",()=>{
        setWidth(window.innerWidth)
    })
  },[])
  return width;

}

export default useWindowResize