import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
import countryList from 'react-select-country-list'
import SearchableSelect from './SearchableSelect'

function CountrySelector() {
  const [value, setValue] = useState('')
  // const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
 
  // const optn = options.map((option) => {
  //   return (
  //     <option value={option}>{option.label}</option>
  //   );
  // });
  // console.log(optn , value)
  return (
    // <select name="country">
    //   {optn}
    // </select>
  //  <Select options={options} value={value} onChange={changeHandler} />
  <SearchableSelect name="countryID"
    // value={this.state.countryID}
    function={changeHandler}
    // list={options}
    objName='countryName'
    label="Country"
    Error="" />
  )
}

export default CountrySelector


// name
// value
// function
// list
// objName
// label
// Error