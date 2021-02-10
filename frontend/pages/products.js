import Products from '../components/Products';
import Pagination from '../components/Pagination';

export default function OrderPage() {
  return (
    <div>
      <Pagination page={2} />
      <Products />
      <Pagination page={2} />
    </div>
  );
}
