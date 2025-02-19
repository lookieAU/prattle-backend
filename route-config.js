const routeConfig = {
    baseUrl: '/v0',
    user: {
        indexRoute: '/user',
        nestedRoutes: {
            authentication: {
                indexRoute: '/auth',
                nestedRoutes: {
                    token: '/token',
                    login: '/login',
                    verify: '/verify',
                    signup: '/signup'
                }
            }
        }
    }
}

module.exports = routeConfig