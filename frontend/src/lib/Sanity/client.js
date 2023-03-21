import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'nnzoqjxs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})