import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export default function ThemeMode() {
    const {theme , setTheme} = useContext(ThemeContext)

  return (
    <div onClick={()=>setTheme(prev => !prev)} >
    {theme ? <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8629 10.167C17.7228 11.6832 17.1537 13.1283 16.2223 14.3329C15.2909 15.5376 14.0357 16.4521 12.6035 16.9694C11.1713 17.4867 9.62142 17.5855 8.13517 17.2541C6.64892 16.9227 5.28779 16.1748 4.21104 15.0981C3.1343 14.0214 2.38647 12.6602 2.05508 11.174C1.72368 9.68773 1.82241 8.13783 2.33973 6.70565C2.85704 5.27347 3.77154 4.01823 4.97621 3.08682C6.18088 2.15541 7.62591 1.58635 9.14219 1.44623C8.25445 2.64724 7.82727 4.12698 7.93833 5.61633C8.0494 7.10568 8.69134 8.5057 9.74739 9.56175C10.8034 10.6178 12.2035 11.2597 13.6928 11.3708C15.1822 11.4819 16.6619 11.0547 17.8629 10.167Z" stroke="#1E2122" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> : <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8288 19.2396C16.9668 19.2396 19.5106 16.6957 19.5106 13.5578C19.5106 10.4198 16.9668 7.87593 13.8288 7.87593C10.6908 7.87593 8.14697 10.4198 8.14697 13.5578C8.14697 16.6957 10.6908 19.2396 13.8288 19.2396Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.8286 1.05779V3.33051" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.8286 23.7851V26.0578" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.98779 4.71688L6.60143 6.33052" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0557 20.785L22.6693 22.3987" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.32861 13.5578H3.60134" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.0557 13.5578H26.3284" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.98779 22.3987L6.60143 20.785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0557 6.33052L22.6693 4.71688" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    }
    </div>
  )
}
