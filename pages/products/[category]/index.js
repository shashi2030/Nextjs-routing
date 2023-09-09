import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
const Slug = ({ products }) => {
    const router = useRouter();
    const { category } = router.query;
    return (
        <div>
            {
                products.map((product) => {
                    return <div style={{ border: "solid 1px green", marginBottom: '20px' }}>
                        <Link href={`/products/${category}/${product.id}`}>
                            <h2>{product.brand}</h2>
                            <h4>{product.category}</h4>
                        </Link>
                    </div>
                })
            }
            <Link className='btn' href={`/products`}>Back to List</Link>

        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://dummyjson.com/products/category/${params.category}`)
    const product = await res.json();
    return { props: { ...product } }
}


export default Slug;