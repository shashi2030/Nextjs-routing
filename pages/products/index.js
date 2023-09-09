import React from 'react';
import Link from 'next/link'
const Dashboard = ({ products }) => {
    return <div>

        <ul>
            {
                products.length && products.map((item) => {
                    return <li>
                        <h2><Link href={`/products/${item}`}>{item}</Link></h2>

                    </li>
                })
            }
        </ul>
    </div>
}

export const getServerSideProps = async () => {
    const res = await fetch('https://dummyjson.com/products/categories')
    const products = await res.json()
    return { props: { products } }
}

export default Dashboard;