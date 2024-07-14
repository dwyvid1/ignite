import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
      <div>
        <Header />

        <Post 
          author="Deyvid Matheus" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis ut voluptatem, ab quibusdam dolorum molestias iusto sed laudantium modi facere dolores aliquid quisquam provident officia error fugiat laboriosam possimus?" 
        />

        <Post 
          author="João Silva" 
          content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa voluptas commodi quo nihil molestiae consequatur expedita? Quisquam quod, harum quos voluptas delectus cumque facilis perspiciatis." 
        />
      </div>
  )
}