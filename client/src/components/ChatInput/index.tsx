import React, { FC, useState } from "react"
import { Input } from 'antd';

import './index.scss'

const { Search } = Input;

interface IProps {
    getSearchVal: (val: string) => void
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ChatInput: FC<Props> = (props) => {
    const { getSearchVal } = props

    const [searchVal, setSearchVal] = useState('')

    const onSearch = (text: string) => {
        getSearchVal(text)
        setSearchVal('')
    }

    const handleSearchChange = (e: React.ChangeEvent) => {
        const {target: { value }} = e
        setSearchVal(value)
    }

    return (
        <div className="chat-input">
            <Search
                value={searchVal}
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className="chat-input__wrap"
                onChange={handleSearchChange}
                allowClear
            />
        </div>
    )
}

ChatInput.defaultProps = defaultProps

export default ChatInput
