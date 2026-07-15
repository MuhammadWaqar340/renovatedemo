/**
 * Fixture file for deprisk-check scanning only (not imported by the Vite app).
 * Uses older import styles that changed in newer major versions.
 */
import chalk from 'chalk'
import uniq from 'lodash/uniq'
import capitalize from 'lodash/capitalize'
import format from 'date-fns/format'
import { v4 as uuidv4 } from 'uuid'
import queryString from 'query-string'
import axios from 'axios'
import { z } from 'zod'

export const fixture = {
  chalk: chalk.green('ok'),
  uniq: uniq([1, 1, 2]),
  capitalize: capitalize('deprisk'),
  format: format(new Date(2020, 0, 15), 'yyyy-MM-dd'),
  uuid: uuidv4(),
  query: queryString.stringify({ a: 1 }),
  axios: axios.VERSION,
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
}
