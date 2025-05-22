import type { ReactNode } from "react";

interface SocialProps{
  url: string;
  children: ReactNode
}



const Social = ({url, children}: SocialProps) => {

  console.log('Qual url que chega', url)


  return (
    <a 
      href={url} 
      rel="noopener noreferrer" 
      target="_blank"
    >
      {children}
    </a>
  )
}

export default Social