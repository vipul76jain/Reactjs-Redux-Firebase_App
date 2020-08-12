import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Counter from './Counter'

const options = [
    { value: 'Single Choice', label: 'Single Choice' },
    { value: 'Multiple Choice', label: 'Multiple Choice' },
    { value: 'Integer Type', label: 'Integer Type' },
];

const column = ["quesNo", "positive", "negative"];

const Clear = styled.button`
    background-color: gray;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 0px;
    text-transform: none;
    font-size: 12px;
    width: 20px;
    height: 20px;
    :focus{
      outline: none;
    }
`;

const Title = styled.text`
    margin-top: 15px;
    text-align: center;
    color: black;
    font-size: 21px;
    font-weight: 700;
`;

const ModalHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Box = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    width: 900px;
    padding: 15px;
    position: absolute;
    left: 260px;
    top: 70px;
`;

const SubTitle = styled.text`
    font-size: 13px;
    color: rgb(147, 147, 147);
`;

export default class Questions extends Component {
    state = {
        count: 0,
        rowsCount: [0],
        selectedRow: [],
    };

    handleCounterChange = (counterName, rowIndex, value) => {
        let questionTypeArr = [...this.state.selectedRow];
        questionTypeArr[rowIndex][counterName] = value
        this.setState({ selectedRow: questionTypeArr });
    }

    handleQuesTypeChange = (selectedOption, index) => {
        let quesType = selectedOption
        let rows = this.state.selectedRow
        let updated_selected_row = []

        if (rows[index]) {
            rows[index].quesType = quesType
            updated_selected_row = rows
        } else {
            updated_selected_row = rows.concat({ quesType: quesType, quesNo: 0, positive: 0, negative: 0 })
        }
        this.setState({ selectedRow: updated_selected_row })
    };

    addRow = () => {
        let iCount = this.state.rowsCount
        let counter = this.state.count
        if (iCount.length !== this.state.selectedRow.length + 1) {
            if (this.state.rowsCount.length <= 2) {
                iCount.push(this.state.count + 1)
                counter = counter + 1
            }
        }
        this.setState({ rowsCount: iCount, count: counter, })
    }

    onCancel = (index) => {
        let rowCount = this.state.rowsCount
        if (rowCount !== undefined) {
            rowCount.pop()
        }
        let rowData = this.state.selectedRow
        if (rowData !== undefined) {
            rowData.splice(index, 1)
        }
        this.setState({
            rowsCount: rowCount,
            selectedRow: rowData
        });
    }

    render() {
        return (
            <div>
                <div className="header" style={{ justifyContent: "center", alignItems: "center", color: "#fff" }}>
                    <h2>Questions Manager</h2>
                </div>
                <div style={{ marginTop: 65, display: "flex", justifyContent: "center" }}>
                    <Modal open={true}>
                        <Box>
                            <ModalHeader>
                                <div className="title">
                                    <Title> Manage Type of Questions </Title>
                                </div>
                                <div className='addQues'>
                                    <Button startIcon={<AddIcon />} size="small" color="primary" onClick={this.addRow} style={{ backgroundColor: "#fff", color: "#53b7e8", outline: "none", fontWeight: 600, borderColor: "#53b7e8", borderWidth: 1, borderStyle: 'solid', paddingLeft: 13, paddingRight: 13, textTransform: "none", fontSize: 15 }}>
                                        Add Question type</Button>
                                </div>
                            </ModalHeader>
                            <div style={{ marginTop: 30, width: '100%' }}>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <SubTitle>Question type</SubTitle>
                                    <SubTitle>Number of questions</SubTitle>
                                    <SubTitle>Positive marks</SubTitle>
                                    <SubTitle>Negative marks</SubTitle>
                                </div>
                                {this.state.rowsCount.map((key, rowIndex) =>
                                    <div style={{ width: '100%', display: "flex", marginBottom: 8 }}>
                                        <div style={{ display: 'flex', justifyContent: "center", width: "25%" }}>
                                            <div style={{ width: "100%" }}>
                                                <div style={{ marginTop: 8 }}>
                                                    <Select
                                                        value={[(this.state.selectedRow[rowIndex] || {}).quesType || '']}
                                                        onChange={(selectedItem) => this.handleQuesTypeChange(selectedItem, rowIndex)}
                                                        options={options}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {column.map((key, index) => {
                                            return <Counter
                                                value={this.state.selectedRow[rowIndex] && this.state.selectedRow[rowIndex][key] || 0}
                                                positiveDisabled={(this.state.selectedRow[rowIndex] || {}).quesType || '' ? false : true}
                                                onChange={(value) => { this.handleCounterChange(key, rowIndex, value) }}
                                                negativeDisable={(this.state.selectedRow[rowIndex] || {})[key] || '' === 0 ? false : true}
                                            />
                                        })}
                                        {(this.state.rowsCount.length > 1) && <div style={{ alignSelf: "center" }}>
                                            <Clear onClick={() => { this.onCancel(rowIndex) }}><ClearIcon fontSize="inherit" /></Clear>
                                        </div>}
                                    </div>)}
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        )
    }
}  