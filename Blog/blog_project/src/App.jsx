import Header from './Header'
import Footer from './Footer'
import Blogcards from './Blogcards'

function app(){

  return(
    <>
      <Header />
      <Blogcards title = "This is a title" description = "This is a description" link = "# open" img ="https://sp.yimg.com/ib/th/id/OIP.a3sDBWsz5DPWEHL0C4NKvQHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" />
      <Footer />
    </>
  )
}

export default app