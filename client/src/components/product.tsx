import { useEffect, useState } from 'react'
import './../App.css'
import { useParams } from 'react-router-dom';

function  Product() {
  const { category } = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${category}`); // Запит до API
        const data = (await response.json()).products; // Перетворюємо відповідь в JSON
        console.log(data);
        setProducts(data); // Записуємо отримані дані в стейт
        
      }
    fetchProducts();
    },[category]);
  return (
    <>
     
    {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    
                    src={product.image}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"./../pr/"+product.title}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price+"$"}</p>
                </div>
              </div>
            ))}
  
</>)
}

export default Product
