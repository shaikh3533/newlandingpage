import React from 'react';
import { Select } from 'antd'
import { CaretDownFilled } from "@ant-design/icons";
const { Option } = Select;

const SearchableSelect = (props) => {
    return (
        <>
            <div className="form-group">
                <Select
                    suffixIcon={<CaretDownFilled style={{ width: "0.5rem", color: "Black" }} />}
                    showSearch
                    placeholder="Select Pair"
                    className="form-control mx-auto"
                    id={props.name}
                    value={props.value}
                    optionFilterProp="children"
                    onChange={(e) => props.function(e, props.name)}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    {props.list.map(item => {
                        return <Option value={item.label} key={item.label}>{item.label}</Option>
                    })}
                </Select>
                {/* <label className={` ${props.value !== "Select "+props.label ? "Valued" : "d-none"}`} htmlFor={props.name}>{props.label}</label> */}
                {props.Error ? <div style={{ color: "red", fontSize: "10px" }}>{props.label} is Required</div> : null}
            </div>
            {/* name
value
function
list
objName
label
Error */}
        </>
    );
}

export default SearchableSelect;
