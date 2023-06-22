import { RecoilRoot } from 'recoil'
import Router from './Router'
import DefaultLayout from './assets/styles/DefaultLayout'

function App() {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  )
}

export default App
