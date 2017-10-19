import * as OCC from '../src/index'

const testWrapper = (occ) => {
    // TODO: implement base site support in occ class
    occ.baseSite = 'apparel-uk'
    occ.ApiClient.instance.basePath = `https://hybris.merlinspotions.com/rest/v2/${occ.baseSite}`

    occ.catalogName = 'Apparel Product Catalog'
    occ.catalogId = 'apparelProductCatalog'
    occ.catalogVersionId = 'staged'
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

    return occ
}

export default testWrapper(OCC)