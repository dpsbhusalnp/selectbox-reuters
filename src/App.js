import React, { useRef } from 'react'
import {Item, useSelectState} from 'react-stately';
import {HiddenSelect, useSelect} from 'react-aria';
import { useButton } from '@react-aria/button'
import OptionList from './option-list/option-list'
import Popup from './popup/popup'

const children = ['cat', 'dog', 'bird'].map(item => <Item key={item}>{item}</Item>)

function Select() {
  // Create state based on the incoming props
  const props={ children:children, label:'xyz', name:'xyz' }
  let state = useSelectState(props);
  const maxHeight=500
  // Get props for child elements from useSelect
  let ref = useRef(null);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps
  } = useSelect(props, state, ref);
  const {
    buttonProps
  } = useButton(triggerProps, ref)
  return (
    <div style={{ display: 'inline-block' }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...buttonProps}
        ref={ref}
        style={{ height: 30, fontSize: 14 }}
        data-testid="Select-Field"
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          ▼
        </span>
      </button>
      {state.isOpen && 
        <Popup
          isOpen={state.isOpen}
          onClose={state.close}
        >
          <OptionList
            {...menuProps}
            maxHeight={maxHeight}
            state={state}
          />
        </Popup>
      }
    </div>
  );
}

export default Select;
