<template>
    <List 
        :items="materials"
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
                    id: 1,
                    name: 'Унтлагын ор',
                    icon: 'mdi-hotel'
                },
                {
                    id: 1,
                    name: 'Давхар ор',
                    icon: 'mdi-seat-flat'
                },
                {
                    id: 1,
                    name: 'Ажлын ширээ',
                    icon: 'mdi-office'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    icon: 'mdi-baby'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    icon: 'mdi-silverware'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    icon: 'mdi-hanger'
                },
                {
                    id: 1,
                    name: 'Гал тогоо',
                    icon: 'mdi-fridge-outline'
                }
            ],
            materials: [
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хоолны ширээ, сандал',
                    image: '/images/products/3.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хүүхдийн ширээ',
                    image: '/images/products/4.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Буйдан',
                    image: '/images/products/1.jpg',
                    price: '125,000'
                },
                {
                    id: 1,
                    name: 'Хувцасны өлгүүр',
                    image: '/images/products/2.jpg',
                    price: '125,000'
                }
            ]
        }
    }
}
</script>
