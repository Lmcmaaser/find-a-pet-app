import { useAlert } from 'react-alert'
import React from 'react'

export default function AlertButton() {
  const alert = useAlert()

  return (
    <button
      onClick={() => {
        alert.show('Oh look, an alert!')
      }}
    >
      Show Alert
    </button>
  )
}
