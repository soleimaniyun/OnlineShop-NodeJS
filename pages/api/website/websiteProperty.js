import prisma from '../../../lib/prisma'

export default async function websiteProperty(req, res) {
    const siteId = req.query.id

    if (req.method === 'GET') {
        infoGET(siteId,res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }

}

async function infoGET(xId, res) {
    const info = await prisma.website_property_registry.findUnique({
        where: { ID: Number(xId) },
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(info))

}
