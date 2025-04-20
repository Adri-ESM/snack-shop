import { Card, Button } from 'antd'
import styles from './SnackCard.module.scss'

interface SnackCardProps {
  title: string
  description: string
  price: number
  image: string
}

export const SnackCard: React.FC<SnackCardProps> = ({
  title,
  description,
  price,
  image
}) => {
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
      <Button className={styles.addButton}>Add to Cart</Button>
    </Card>
  )
}
