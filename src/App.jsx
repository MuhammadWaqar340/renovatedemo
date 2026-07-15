import { useState } from 'react'
// Old deep-path imports — changed/removed in newer majors (good DepRisk targets)
import uniq from 'lodash/uniq'
import capitalize from 'lodash/capitalize'
import format from 'date-fns/format'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { z } from 'zod'
import queryString from 'query-string'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const demoItems = uniq(['vite', 'react', 'lodash', 'react', 'vite'])
const title = capitalize('get started')
const demoId = uuidv4()
const demoDate = format(new Date(2020, 0, 15), 'yyyy-MM-dd')
const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
  email: z.string().email(),
})
const parsedUser = UserSchema.parse({
  name: 'Renovate',
  age: 1,
  email: 'demo@example.com',
})
const axiosVersion = axios.VERSION || '0.21.x'
const queryDemo = queryString.stringify({ pkg: 'deprisk-check', risk: 'high' })
const parsedQuery = queryString.parse(queryDemo)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>
            Old import styles for{' '}
            <a href="https://www.npmjs.com/package/deprisk-check" target="_blank" rel="noreferrer">
              deprisk-check
            </a>{' '}
            testing
          </p>
          <ul style={{ textAlign: 'left', listStyle: 'disc', paddingLeft: '1.25rem' }}>
            <li>
              <code>lodash/uniq</code> + <code>lodash/capitalize</code> @4.0.0 → {demoItems.join(' · ')}
            </li>
            <li>
              <code>date-fns/format</code> @2.30.0 → {demoDate}
            </li>
            <li>
              <code>{'{ v4 }'} from 'uuid'</code> @8.3.2 → {demoId}
            </li>
            <li>
              <code>{'{ z }'} from 'zod'</code> @3.22.4 → {parsedUser.name} / {parsedUser.email}
            </li>
            <li>
              <code>query-string</code> default import @6.14.1 → {parsedQuery.pkg}={parsedQuery.risk}
            </li>
            <li>
              axios default import @{axiosVersion} (pinned 0.21.4)
            </li>
            <li>
              chalk default import @4.1.2 → run <code>npm run demo:chalk</code>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
