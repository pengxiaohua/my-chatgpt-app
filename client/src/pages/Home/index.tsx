import { FC, useState, useEffect } from "react"
import cloneDeep from "lodash/cloneDeep"
import { UserOutlined, RobotOutlined, LoadingOutlined } from '@ant-design/icons'

import ChatInput from "../../components/ChatInput"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Home: FC<Props> = (props) => {
  const [valList, setValList] = useState([] as string[])
  const [answerLoader, setAnswerLoader] = useState('')

  useEffect(() => {
    let newLoader = cloneDeep(answerLoader)

    const timer = setInterval(() => {
      newLoader += '.'
      setAnswerLoader(newLoader)

      if (newLoader === '....') {
        setAnswerLoader('')
      }
    }, 300);

    return () => clearInterval(timer)

  }, [answerLoader])

  const handleSearchVal = (val: string) => {
    const currentValList = cloneDeep(valList)
    currentValList.push(val)
    setValList(currentValList)
  }

  const renderValItem = (item: string) => (
    <div className="home__val-item" key={`${item}-${Date.now()}`}>
      <div className="home__val-item__question">
        <UserOutlined className="home__val-item__question__avatar" />
        <div className="home__val-item__val">{item}</div>
      </div>
      <div className="home__val-item__answer">
        <RobotOutlined className="home__val-item__answer__avatar"/>
        <div className="home__val-item__val">
          {answerLoader}
        </div>
      </div>
    </div>
  )

  return (
    <div className="home">
      <div className="home__val-list">
        {
          valList.length > 0 && valList.map(renderValItem)
        }
      </div>
      <ChatInput getSearchVal={handleSearchVal} />
    </div>
  )
}

Home.defaultProps = defaultProps

export default Home
