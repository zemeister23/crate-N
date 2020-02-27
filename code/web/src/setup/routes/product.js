// App Imports
import Detail from '../../modules/product/Detail'

// Product routes
export default {
  product: {
    path: (slug = ':slug') => (`/product/${ slug }`),
    component: Detail
  }
}
