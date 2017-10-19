import * as OCC from '../src/index'

const testWrapper = (occ) => {
    // TODO: implement base site support in occ class
    occ.ApiClient.instance.basePath = 'https://hybris.merlinspotions.com/rest/v2/apparel-uk'
    return occ
}

export default testWrapper(OCC)