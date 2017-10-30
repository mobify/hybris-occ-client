import * as OCC from '../src/index'
import config from './config.json'

const testWrapper = (occ) => {
    console.log(process.env)
    if (process.env.CIRCLE) {
        const basePath = `${process.env.baseUrl}/${process.env.baseSite}`
        occ.ApiClient.instance = new occ.ApiClient(basePath, process.env.authorizationUrl)
    } if (require('./config.json')) {
        const config = require('./config.json')
        occ.ApiClient.instance = new occ.ApiClient(`${config.baseUrl}/${config.baseSite}`, config.authorizationUrl) 
    } else {
        throw new Error('Config.json is missing!')
    }

    occ.catalogName = 'Apparel Product Catalog'
    occ.catalogId = 'apparelProductCatalog'
    occ.catalogVersionId = 'Online'
    occ.currencies = {
        isocode: 'GBP',
        name: 'Pound',
        active: false,
        symbol: '£'
    }
    occ.deliveryCountries = [{
            isocode: 'CA',
            name: 'Canada'
        },
        {
            isocode: 'GG',
            name: 'Guernsey'
        },
        {
            isocode: 'IM',
            name: 'Isle of Man'
        },
        {
            isocode: 'JE',
            name: 'Jersey'
        },
        {
            isocode: 'GB',
            name: 'United Kingdom'
        },
        {
            isocode: 'US',
            name: 'United States'
        }
    ]
    occ.languages = [{
        isocode: 'en',
        name: 'English',
        nativeName: 'English',
        active: true
    }]
    occ.sampleProduct = {
        name: 'BT Airhole Helgasons Facemask tiedie LXL',
        code: '300515779',
    }
    occ.productReview = {
        alias: 'Mobify',
        headline: 'Mobify Review',
        comment: 'Mobify comment',
        rating: 5
    }
    occ.search = {
        'query': 'BT Airhole Helgasons Facemask tiedie LXL',
        'pageSize': '20',
        'sort': '',
        'currentPage': '',
        'fields': 'FULL'
    }
    occ.searchResults = {
        freeTextSearch: 'BT Airhole Helgasons Facemask tiedie LXL',
        products: [{
            code: '300515779',
            name: 'BT Airhole Helgasons Facemask tiedie LXL',
            url: '/Categories/Accessories/Bandanas/BT-Airhole-Helgasons-Facemask/p/300515779',
            baseProduct: '111160'
        }],
        sorts: [{
                code: 'relevance',
                name: 'Relevance',
                selected: true
            },
            {
                code: 'topRated',
                name: 'Top Rated',
                selected: false
            },
            {
                code: 'name-asc',
                name: 'Name (ascending)',
                selected: false
            },
            {
                code: 'name-desc',
                name: 'Name (descending)',
                selected: false
            },
            {
                code: 'price-asc',
                name: 'Price (lowest first)',
                selected: false
            },
            {
                code: 'price-desc',
                name: 'Price (highest first)',
                selected: false
            }
        ]
    }
    occ.store = {
        name: 'London School',
        stockLevelStatus: 'inStock',
        stockLevel: 16,
        geoPoint: { latitude: 51.513779, longitude: -0.1167 }
    }
    occ.productSuggestion = {
        term: 'h',
        max: 10,
        answer: [{
                value: 'helmet'
            },
            {
                value: 'heather'
            },
            {
                value: 'helm'
            },
            {
                value: 'her'
            },
            {
                value: 'honey'
            }
        ]
    }
    occ.titles = [{
            code: 'mr',
            name: 'Mr.'
        },
        {
            code: 'ms',
            name: 'Ms.'
        },
        {
            code: 'miss',
            name: 'Miss'
        },
        {
            code: 'mrs',
            name: 'Mrs.'
        },
        {
            code: 'dr',
            name: 'Dr.'
        },
        {
            code: 'rev',
            name: 'Rev.'
        }
    ]
    occ.order = {
        code: '00001700',
        status: 'COMPLETED',
        guestCustomer: true,
        deliveryStatus: 'SHIPPED',
        fields: [
            'totalPriceWithTax',
            'totalPrice',
            'totalTax',
            'subTotal',
            'deliveryCost',
            'entries',
            'totalItems',
            'deliveryMode',
            'deliveryAddress',
            'paymentInfo',
            'appliedOrderPromotions',
            'appliedProductPromotions',
            'productDiscounts',
            'orderDiscounts',
            'totalDiscounts',
            'site',
            'guid',
            'calculated',
            'appliedVouchers',
            'user',
            'deliveryOrderGroups',
        ]
    }
    occ.promotion = {
        group: 'apparelUKPromoGrp',
        code: 'mobify_promotion_test'
    }

    occ.user = occ.UserSignUpWsDTOModel.constructFromObject({
        firstName: 'Mobify',
        lastName: 'Automation',
        titleCode: occ.titles[0].code,
        uid: 'mobifyautomation@mobify.com',
        uid2: 'mobifyautomation2@mobify.com',
        password: 'Passw0rd!',
    })
        

    occ.address = occ.AddressWsDTO296Model.constructFromObject({
        firstName: 'Mobify',
        lastName: 'automation',
        titleCode: occ.titles[0].code,
        line1:'West Road',
        line2:'',
        postalCode:'CB3 9DR',
        town:'Cambridge',
        country:{
            isocode: 'GB'
        },
        phone:'(777) 777-7777',
        companyName:'',
        defaultAddress:false
    })

    occ.payment = {
        billingAddress: occ.address,
        cardType: {code: 'visa', name: 'Visa'},
        cardNumber: '4111111111111111',
        accountHolderName: 'Mobify Automation',
        expiryYear: '2020',
        expiryMonth: '12',
        securityCode: '111'
    }
    return occ
}

export default testWrapper(OCC)