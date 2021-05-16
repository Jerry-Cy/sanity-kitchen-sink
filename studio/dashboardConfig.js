export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a1601559f588abf22ee042',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-62qvr9av',
                  apiId: 'c6396df6-f9aa-4ae2-8095-5c1e25477a60'
                },
                {
                  buildHookId: '60a1601683ec5a479b0387ca',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h7193maq',
                  apiId: '316d3fcb-a5c9-4013-b7e7-497975990220'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jerry-Cy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h7193maq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
