import { PostList } from '../component'
import Header from '../component/common/Header'

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>하이</h1>
      <span>헬로우</span>
      <PostList />
    </div>
  )
}
export default Main
