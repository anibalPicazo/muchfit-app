export default function ({store, $axios}) {

  // $axios.onRequest(request => {
  //   console.log(`Making ${request.method.toUpperCase()} request to ${request.url}`)
  // })

  // $axios.onResponse(response => {
  //   console.log('response', response);
  // })

  $axios.onError(error => {
    const response = error.response;
    console.error('error.response', response);
    if (response.status !== 401)
      store.commit("notification/show", {color: 'error', text: `ERROR ${response.status}: ${response.data.message}`})
  })
}
