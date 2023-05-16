import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import { FocusScope } from '@react-aria/focus'

const Popup = props => {
  const ref = useRef()

  const {
    popupRef = ref,
    isOpen,
    onClose,
    children
  } = props

  const {
    overlayProps
  } = useOverlay({
    isOpen,
    onClose,
    shouldCloseOnBlur: true,
    isDismissable: true
  }, popupRef)

  return (
    <FocusScope restoreFocus>
      <div
        {...overlayProps}
        className={'popup'}
        ref={popupRef}
        data-testid="Select-Popup"
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}

Popup.propTypes = {
  popupRef: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default Popup
