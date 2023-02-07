import React, { FC } from "react"
import { Input } from 'antd';

import './index.scss'

const { Search } = Input;

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ChatInput: FC<Props> = (props) => {

    const onSearch = (text: string) => {
        console.log({ text });

    }
    return (
        <div className="chat-input">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className="chat-input__wrap"
                allowClear
            />
        </div>
    )
}

ChatInput.defaultProps = defaultProps

export default ChatInput
