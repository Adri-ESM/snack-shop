import { Button } from 'antd'
import { Row, Col } from 'antd'
import { useMemo } from 'react'
import { SnackCard } from './components/snackCard/SnackCard'
import { CartIcon } from './components/cartIcon/CartIcon'
import './App.css'

function App () {
  const snacks = useMemo(
    () => [
      {
        id: 1,
        title: 'Almond Energy Bar',
        description: 'Natural almonds and honey',
        price: 2.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8qFyftgeLk19_THBWVEYB9CJrlmO8H93Aw&s'
      },
      {
        id: 2,
        title: 'Choco Protein Bites',
        description: 'Dark chocolate with protein crunch',
        price: 3.49,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZB705h2O-9efGKQGBIgBGrg9uBePc6XuHNA&s'
      },
      {
        id: 3,
        title: 'Dried Fruit Mix',
        description: 'No sugar added. Just fruits!',
        price: 2.75,
        image: 'https://m.media-amazon.com/images/I/91Is9iDMwFL.jpg'
      }
    ],
    []
  )

  return (
    <div style={{ padding: '2rem' }}>
      <CartIcon />
      <h1>Healthy Snacks 🥜</h1>
      <Row gutter={[16, 16]}>
        {snacks.map(snack => (
          <Col span={8} key={snack.id}>
            <SnackCard
              id={snack.id}
              title={snack.title}
              description={snack.description}
              price={snack.price}
              image={snack.image}
            />
          </Col>
        ))}
      </Row>

      <Button className='buyButton'>Buy snack</Button>
    </div>
  )
}

export default App
