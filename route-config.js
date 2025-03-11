const routeConfig = {
    baseUrl: '/v0',
    user: {
        indexRoute: '/user',
        nestedRoutes: {
            status: '/status',
            auth: {
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
                indexRoute: '/media',
                nestedRoutes: {
                    get: '/get'
                }
            },
        },
    },
    //         prat: {
    //             indexRoute: '/prat',
    //             nestedRoutes: {
    //                 add: '/add',
    //                 edit: '/edit',
    //                 delete: '/delete',
    //                 get: '/get',
    //                 likes: {
    //                     indexRoute: '/likes',
    //                     nestedRoutes: {
    //                         get: '/get',
    //                         add: '/add',
    //                         remove: '/remove'
    //                     }
    //                 },
    //                 thoughts: {
    //                     indexRoute: '/thoughts',
    //                     nestedRoutes: {
    //                         get: '/get',
    //                         add: '/add',
    //                         remove: '/remove',
    //                         like: '/like',
    //                         unlike: '/unlike',
    //                         sub: '/sub'
    //                     }
    //                 },
    //                 share: {
    //                     indexRoute: '/share',
    //                     nestedRoutes: {
    //                         link: '/link',
    //                     }
    //                 },
    //                 faction: {
    //                     indexRoute: '/faction',
    //                     nestedRoutes: {
    //                         addrequest: '/addrequest',
    //                         removerequest: '/removerequest',
    //                         join: '/join',
    //                         view: '/view'
    //                     }
    //                 },
    //                 translate: {
    //                     indexRoute: '/translate',
    //                     nestedRoutes: {
    //                         mistral: '/mistral'
    //                     }
    //                 },
    //                 composition: {
    //                     indexRoute: '/composition',
    //                     nestedRoutes: {
    //                         mistral: '/mistral'
    //                     }
    //                 }
    //             }
    //         },
    //         faction: {
    //             indexRoute: '/faction',
    //             nestedRoutes: {
    //                 add: '/add',
    //                 get: '/get',
    //                 edit: '/edit',
    //                 delete: '/delete',
    //                 dp: '/dp',
    //                 moderation: {
    //                     indexRoute: '/moderation',
    //                     nestedRoutes: {
    //                         add: '/add',
    //                         get: '/get',
    //                         update: '/update'
    //                     }
    //                 },
    //                 founder: {
    //                     indexRoute: '/founder',
    //                     nestedRoutes: {
    //                         update: '/update'
    //                     }
    //                 },
    //                 requests: {
    //                     indexRoute: '/indexRoute',
    //                     nestedRoutes: {
    //                         view: '/view',
    //                         accept: '/accept',
    //                         reject: '/reject'
    //                     }
    //                 },
    //                 members: {
    //                     indexRoute: '/members',
    //                     nestedRoutes: {
    //                         get: '/get',
    //                         remove: '/remove'
    //                     }
    //                 },
    //                 chat: {
    //                     indexRoute: '/chat',
    //                     nestedRoutes: {
    //                         get: '/get',
    //                         send: '/send',
    //                         edit: '/edit',
    //                         delete: '/delete',
    //                         upload: '/upload'
    //                     }
    //                 },
    //                 visibility: {
    //                     indexRoute: '/visibility',
    //                     nestedRoutes: {
    //                         get: '/get',
    //                         graph: '/graph'
    //                     }
    //                 }
    //             }
    //         },
    //         feed: {
    //             indexRoute: '/feed',
    //             nestedRoutes: {
    //                 home: {
    //                     indexRoute: '/home',
    //                     nestedRoutes: {
    //                         get: '/get'
    //                     }
    //                 },
    //                 explore: {
    //                     indexRoute: '/explore',
    //                     nestedRoute: {
    //                         search: '/search',
    //                         trending: '/trending',
    //                         get: '/get'
    //                     }
    //                 }
    //             }
    //         },
    //         chat: {
    //             indexRoute: '/chat',
    //             nestedRoutes: {
    //                 all: '/all',
    //                 get: '/get',
    //                 send: '/send',
    //                 update: '/update',
    //                 delete: '/delete',
    //                 clear: '/clear',
    //                 remove: '/remove'
    //             }
    //         }
    //     }
    // },
    web: {
        indexRoute: '/web',
        nestedRoutes: {
            links: {
                indexRoute: '/links',
                nestedRoutes: {
                    privacy: '/privacy',
                    tos: '/tos',
                    cg: '/cg',
                    cp: '/cp',
                    drp: '/drp',
                    dmca: '/dmca',
                    ugc: '/ugc',
                }
            },
            app: {
                indexRoute: '/app',
                nestedRoutes: {
                    android: '/android',
                    ios: '/ios'
                }
            },
            contact: '/contact',
        }
    }
}

module.exports = routeConfig