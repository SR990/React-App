import { useQuery } from '@tanstack/react-query';
import orders from '../data/Orders.json'


const fetchOrders = async () => {
    return orders
  }

function useOrders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,

})}

export default useOrders;
