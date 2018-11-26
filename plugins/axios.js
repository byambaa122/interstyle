export default function ({ $axios }) {
    $axios.onRequest(config => {
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    })

    $axios.onError(error => {
        console.log(error.response)
    })
}
