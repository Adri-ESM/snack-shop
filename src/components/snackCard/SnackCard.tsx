import { Card, Button } from 'antd'
import styles from './SnackCard.module.scss'
import { useCart } from '../../context/CartContext'

interface SnackCardProps {
  title: string
  description: string
  price: number
  image: string
}

export const SnackCard: React.FC<SnackCardProps & { id: number }> = ({
  id,
  title,
  description,
  price,
  image
}) => {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem({ id, title, price, quantity: 1 })
  }

  return (
    <Card
      hoverable
      className={styles.card}
      cover={<img alt={title} src={image} />}
    >
      <div className={styles.meta}>
        <Card.Meta title={title} description={description} />
      </div>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <Button className={styles.addButton} onClick={handleAdd}>
        Add to Cart
      </Button>
    </Card>
  )
}
