import { MdProductionQuantityLimits } from 'react-icons/md'

export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  icon: MdProductionQuantityLimits,
  fields: [
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Available',
      name: 'available',
      type: 'boolean',
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'Product Description',
      name: 'productDescription',
      type: 'productDescription',
    },
    {
      title: 'Product Categories',
      name: 'productCategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productCategory' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'name',
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      }
    },
  },
}
