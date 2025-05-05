import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useCart } from '../../context/CartContext'
import styles from './CartIcon.module.scss'
import { useState, useMemo } from 'react'

export const CartIcon: React.FC = () => {
  const { items } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  return (
    <div
      className={styles.cartIcon}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Badge count={totalItems} size='small'>
        <ShoppingCartOutlined className={styles.icon} />
      </Badge>
    </div>
  )
}
