import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useOption } from '@react-aria/listbox'


const OPTION_STATE = {
  NONE: 'none',
  SELECTED: 'selected',
  FOCUSED: 'focused',
  DISABLED: 'disabled'
}

const Option = props => {
  const {
    item,
    state
  } = props


  const ref = useRef()
  const {
    optionProps,
    isSelected,
    isFocused,
    isDisabled
  } = useOption({ key: item.key }, state, ref)

  let optionState = OPTION_STATE.NONE

  if (isSelected) {
    optionState = OPTION_STATE.SELECTED
  } else if (isFocused) {
    optionState = OPTION_STATE.FOCUSED
  } else if (isDisabled) {
    optionState = OPTION_STATE.DISABLED
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={'option'}
    >
      {
        isSelected &&
          <VisuallyHidden>
            <span tag="span">{'selected_colon_space'}</span>
          </VisuallyHidden>
      }
      <span
        tag="span"
       
        className={'text'}
      >
        {item.rendered}
      </span>
    </li>
  )
}

Option.propTypes = {
  item: PropTypes.object,
  state: PropTypes.object
}

export default Option
