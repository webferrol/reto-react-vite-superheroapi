import { BASE_URL } from './constans'
import './style.css'

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN as string
const END_POINT = BASE_URL + ACCESS_TOKEN + '/search'

const appElement = document.querySelector<HTMLDivElement>('#app')

if (appElement !== null && appElement !== undefined) {
  appElement.innerHTML = `
    <div>
     ${END_POINT}
    </div>
  `
}
