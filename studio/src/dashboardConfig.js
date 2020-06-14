export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee63754906ea8028e6556bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tmux8y7j',
                  apiId: '47317135-cfb8-46ea-abc5-0a4eb945ff5c'
                },
                {
                  buildHookId: '5ee6375478ea9601cedb42ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7xetynn8',
                  apiId: '80c4633a-4496-4837-a941-f55966d80ac0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivancheban/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7xetynn8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
