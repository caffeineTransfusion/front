import { RecoilRoot } from 'recoil'
import Router from './Router'
import DefaultLayout from './assets/styles/DefaultLayout'

function App() {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </RecoilRoot>
  )
}

export default App
