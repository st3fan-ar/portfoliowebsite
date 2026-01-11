import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Stefan Portfolio Blog',
  projectId: 'gat0ugz2',
  dataset: 'production',
  basePath: '/studio',
  
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
