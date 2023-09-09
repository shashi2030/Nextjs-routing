import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
const Slug = ({ product }) => {
    const router = useRouter();
    const { category, slug } = router.query;
    return (
        <div>
            <h2>{product.brand}</h2>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
            <div className='product-images' style={{ display: "flex" }}>
                {
                    product.images.map((image) => {
                        return <img width={100} height={100} src={image} />
                    })
                }
            </div>
            <Link className='btn' href={`/products/${category}`}>Back to List</Link>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://dummyjson.com/products/${params.slug}`)
    const product = await res.json();
    return { props: { product } }
}


export default Slug;