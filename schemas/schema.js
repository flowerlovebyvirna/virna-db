import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
//import custom schemas
import blog from './documents/blog'
import blogCategory from './documents/blogCategory'
import product from './documents/product'
import productCategory from './documents/productCategory'
import featured from './documents/featured'
//import custom object
import customImage from './objects/customImage'
import bodyText from './objects/bodyText'
import excerptText from './objects/excerptText'
import productDescription from './objects/productDescription'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    featured,
    blog,
    productDescription,
    productCategory,
    customImage,
    bodyText,
    excerptText,
    blogCategory,
    product,
  ]),
})
