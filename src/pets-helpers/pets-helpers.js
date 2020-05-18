import { useAlert } from 'react-alert'
import React from 'react'

export default function AlertButton() {
  const alert = useAlert()

  return (
    <button
      className="submit-button"
      onClick={() => {
        alert.show('Information successfully submitted!')
      }}
    >
      Submit
    </button>
  )
}
