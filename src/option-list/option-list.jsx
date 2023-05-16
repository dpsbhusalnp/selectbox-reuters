import React, { useRef } from 'react'
import { useListBox } from '@react-aria/listbox'
import PropTypes from 'prop-types'
import Option from './../option/option'

const OptionList = props => {
  const ref = useRef()
  const {
    listBoxRef = ref,
    state,
    maxHeight
  } = props

  const {
    listBoxProps
  } = useListBox(props, state, listBoxRef)

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className={'option-list'}
      style={{
        maxHeight
      }}
    >
      {[...state.collection].map(singleItem => (
        <Option
          key={singleItem.key}
          item={singleItem}
          state={state} />
      ))}
    </ul>
  )
}

OptionList.propTypes = {
  listBoxRef: PropTypes.object,
  state: PropTypes.object,
  maxHeight: PropTypes.string
}

export default OptionList
