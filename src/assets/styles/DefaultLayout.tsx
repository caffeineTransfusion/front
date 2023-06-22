import '../styles/Normalize.css'
import { Header } from "../../component"

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
export default DefaultLayout
