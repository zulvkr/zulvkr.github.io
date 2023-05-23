import { useLottie } from 'lottie-react'
import Cat from './Cat.json'

const FooterCat = () => {
  const options = {
    animationData: Cat,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default FooterCat
