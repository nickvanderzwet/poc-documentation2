module.exports = {
    base: '/poc-documentation2/',
    title: 'Connect Holland Documentation',
    themeConfig: {
        sidebar: {
            '/project1/': [
                ''
            ],
            '/project2/': [
                '',
                'extra'
            ],
            '/': [
                '/project1/',
                '/project2/'
            ]
        }
    }
}
