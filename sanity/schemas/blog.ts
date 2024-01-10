// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title of blog'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'slug of your blog',
        options:{
          source:'title'
        }
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'title image'
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'description of blog'
      },
      {
        name: 'content',
        type: 'array',
        title: 'content',
        of:[{
            type:'block'
        }]
      }
    ]
  }