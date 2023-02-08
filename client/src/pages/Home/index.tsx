import { FC, useState } from "react"
import cloneDeep from "lodash/cloneDeep"
import { UserOutlined, RobotOutlined } from '@ant-design/icons'

import ChatInput from "../../components/ChatInput"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Home: FC<Props> = (props) => {
  const [valList, setValList] = useState([] as string[])

  const handleSearchVal = (val: string) => {
    const currentValList = cloneDeep(valList)
    currentValList.push(val)
    setValList(currentValList)
  }

  return (
    <div className="home">
      <div className="home__container">
        
      </div>
      <ChatInput getSearchVal={handleSearchVal} />
    </div>
  )
}

Home.defaultProps = defaultProps

export default Home
