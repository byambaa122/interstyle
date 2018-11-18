<template>
    <List 
        :items="products"
        :categories="categories"
    />
</template>

<script>
import List from '~/components/List'

const defaultCategory = {
    id: '',
    name: ''
}

export default {
    components: {
        List
    },
    data() {
        return {
            page: 1,
            category: defaultCategory,
            categories: [
                {
                    id: 1,
                    name: 'Буйдан',
                    icon: 'mdi-sofa'
                },
                {
                    id: 2,
                    name: 'Унтлагын ор',
                    icon: 'mdi-hotel'
                },
                {
                    id: 3,
                    name: 'Давхар ор',
                    icon: 'mdi-seat-flat'
                },
                {
                    id: 4,
                    name: 'Ажлын ширээ',
                    icon: 'mdi-office'
                },
                {
                    id: 5,
                    name: 'Хүүхдийн ширээ',
                    icon: 'mdi-baby'
                },
                {
                    id: 6,
                    name: 'Хоолны ширээ, сандал',
                    icon: 'mdi-silverware'
                },
                {
                    id: 7,
                    name: 'Хувцасны өлгүүр',
                    icon: 'mdi-hanger'
                },
                {
                    id: 8,
                    name: 'Гал тогоо',
                    icon: 'mdi-fridge-outline'
                }
            ],
            products: [
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    code: 'LB0214',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                }
            ]
        }
    }
}
</script>
