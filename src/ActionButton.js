import styled from 'styled-components'
import DynamicComponent from './DinamicComponent'
import Tooltip from '@material-ui/core/Tooltip'
import { useState, useEffect } from 'react'

const ActionButton = ({ buttonIcon, onClick, disabled, tooltip }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (disabled && open) {
      setOpen(false)
    }
  }, [disabled, open])

  return (
    <>
      <Tooltip
        title={tooltip}
        placement='top'
        arrow
        onOpen={() => {
          if (!disabled) {
            setOpen(true)
          }
        }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Button onClick={onClick} disabled={disabled}>
          <ButtonIcon tag={buttonIcon} />
        </Button>
      </Tooltip>
    </>
  )
}

const Button = styled.button`
  display: flex;
  flex-direction: row-gap;
  cursor: pointer;
  /* cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; */
  border-radius: 10rem;
  font-size: 0.75rem;
  line-height: 1.5;
  height: 1.25rem;
  width: 3.2rem;
  color: #1976d2;
  border: 1px solid #1976d2;
  background: white;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  outline: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background: ${({ disabled }) => (disabled ? 'white' : '#1976d2')};
    color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
  }

  &:disabled {
    background: white;
    color: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
`

const ButtonIcon = styled(DynamicComponent)`
  font-size: 1.2em;
  color: inherit;
  margin: auto;
`

export default ActionButton
