export interface ColourButtonProps {
  colour?: string,
  handleClick?: () => void
}

const ColourButton = (props: ColourButtonProps) => {
  const styleAttribute = { 
    backgroundColor: props.colour
  }
  return (
    <button style={styleAttribute} onClick={props.handleClick}>My colour is {props.colour}</button>
  )
}

export default ColourButton
