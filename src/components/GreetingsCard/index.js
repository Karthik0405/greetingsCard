import {Component} from 'react'
import {DivContainer, Heading, ListContainer, Image} from './styledComponents'
import GreetingsItem from '../GreetingItem'

class GreetingsCard extends Component {
  state = {buttonId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  renderId = id => {
    this.setState({
      buttonId: id,
    })
  }

  render() {
    const {languageGreetingsList} = this.props
    const {buttonId} = this.state
    const imageItem = languageGreetingsList.find(
      eachItem => eachItem.id === buttonId,
    )
    return (
      <DivContainer>
        <Heading>Multilingual Greetings</Heading>
        <ListContainer>
          {languageGreetingsList.map(eachItem => (
            <GreetingsItem
              eachItem={eachItem}
              key={eachItem.id}
              isActive={eachItem.id === buttonId}
              renderId={this.renderId}
            />
          ))}
        </ListContainer>
        <Image src={imageItem.imageUrl} alt={imageItem.imageAltText} />
      </DivContainer>
    )
  }
}

export default GreetingsCard
