import './style.css'

const appElement = document.querySelector<HTMLDivElement>('#app')

if (appElement !== null && appElement !== undefined) {
  appElement.innerHTML = `
    <div>
     Code here!!!
    </div>
  `
}
