import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Count = styled.button`
    background-color: rgb(255, 255, 255);
    color: gray;
    font-weight: 600;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(224, 224, 224);
    border-radius: 4px;
    text-transform: none;
    font-size: 20px;
    width: 35px;
    height: 35px;
    :focus{
      outline: none;
    }
`;

const Input = styled.input`
    margin-left: 4px;
    margin-right: 4px;
    text-align: center;
    height: 36px;
    width: 75px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(224, 224, 224);
    border-radius: 4px;
    :focus{
        outline: none;
      }
`;

const CounterWrapper = styled.div`
    display: flex;
    justify-Content: center;
    width: 25%;
    padding: 8px;
`;

function Counter(props) {

    const [data, setData] = useState(0)

    useEffect(() => {
        if (props.value != data)
            setData(props.value);
    }, [props.value])

    const onClickCounter = (value) => {
        if (value === "POSITIVE") {
            setData(data + 1)
            props.onChange(data + 1)
        } else {
            setData(data - 1)
            props.onChange(data - 1)
        }

    }

    return (
        <CounterWrapper>
            <div>
                <Count disabled={props.negativeDisable} onClick={() => onClickCounter("NEGATIVE")}>-</Count>
                <Input type="text" name="count" value={data || 0} />
                <Count disabled={props.positiveDisabled} onClick={() => onClickCounter("POSITIVE")}>+</Count>
            </div>
        </CounterWrapper>
    )
}

Counter.propTypes = {
    value: PropTypes.number,
    positiveDisabled: PropTypes.bool,
    negativeDisable: PropTypes.bool,
    onChange: PropTypes.func
}

Counter.defaultProps = {
    value: 0,
    positiveDisabled: false,
    negativeDisable: false,
}

export default Counter;