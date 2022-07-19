import { MdStar } from 'react-icons/md'

export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Featured Blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
    {
      name: 'product',
      title: 'Featured Product',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
}
