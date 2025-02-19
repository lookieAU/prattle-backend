const routeConfig = {
    baseUrl: '/v0',
    user: {
        indexRoute: '/user',
        nestedRoutes: {
            status: '/status',
            authentication: {
                indexRoute: '/auth',
                nestedRoutes: {
                    token: '/token',
                    login: '/login',
                    verify: '/verify',
                    signup: '/signup',
                    code: '/code',
                    check: '/check',
                    reset: '/reset'
                }
            },
            addons: {
                indexRoute: '/addons',
                nestedRoutes: {
                    survey: '/survey',
                    optout: '/optout'
                }
            },
            profile: {
                indexRoute: '/profile',
                nestedRoutes: {
                    get: '/get',
                    update: '/update',
                    delete: '/delete',
                    dp: '/dp'
                }
            },
            media: {
                indexRoute: '/profile',
                nestedRoutes: {
                    get: '/get'
                }
            }
        }
    }
}

module.exports = routeConfig