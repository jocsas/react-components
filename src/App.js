import Item from './components/item';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          item 3
        </Item>
      </ul>
      <Card />
    </>
  )
}

export default App;