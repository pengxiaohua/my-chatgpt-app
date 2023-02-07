import { FC } from "react"

import ChatInput from "../../components/ChatInput"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Home: FC<Props> = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        
      </div>
      <ChatInput />
    </div>
  )
}

Home.defaultProps = defaultProps

export default Home
