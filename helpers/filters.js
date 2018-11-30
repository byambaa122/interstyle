import Vue from 'vue'
import numeral from 'numeral'

const format = (value) => {
    return isNaN(value)
        ? value
        : numeral(value).format('0,0')
}

const currency = (value, currency = 'MNT') => {
    return `${currency} ${format(value)}`
}

const measure = (value) => {
    switch (value) {
        case 'linear': {
            return 'м'
        }
        case 'square': {
            return 'м2'
        }
        case 'cubic': {
            return 'м3'
        }
    }
}

Vue.filter('format', format)
Vue.filter('currency', currency)
Vue.filter('measure', measure)
