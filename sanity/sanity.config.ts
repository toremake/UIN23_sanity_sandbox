import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'tomato-chicken',

  projectId: 'DIN SANITY-PROJECT-ID',
  //Hvordan finne projectID: https://lms.webtricks.blog/kurs/uin/sanity-og-groq/sette-opp-sanity-for-et-react-prosjekt
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

