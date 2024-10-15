import {ListItem, Button} from './styledComponents'

const GreetingItem = props => {
  const {eachItem, isActive, renderId} = props
  const {id, buttonText} = eachItem

  const gettingButtonId = () => {
    renderId(id)
  }

  return (
    <ListItem>
      <Button isActive={isActive} type="button" onClick={gettingButtonId}>
        {buttonText}
      </Button>
    </ListItem>
  )
}

export default GreetingItem
