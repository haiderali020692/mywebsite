import React from 'react';
import Link from 'next/link'
import { Page, useTheme, Button, Drawer, Text } from '@geist-ui/core'
import PostCard from "../components/PostCard"
import getPosts from "../helpers/getPosts"


function Blog({ posts }) {

const { palette } = useTheme()
const [ state, setState] = React.useState(false)
const [ placement, setPlacement] = React.useState('')
const open = (text) => {
  setPlacement(text)
  setState(true)
}

return <> <Page className="flex flex-col items-center">
            <Page.Header style={{ color: palette.successLight }}>
              <div className='blog-text'><Text className='md:text-4xl sm:text-3xl' style={{color: "#fc0174", textShadow: "-1px 1px 0 #310a3f"}} h1>Welcome to Haider's Blog</Text></div>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px">Open Menu</Button>
            </Page.Header>
            <Page.Content>
            <div>
              <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.data.title}
                  date={post.data.date}
                  description={post.data.description}
                  slug={post.slug}
                />
              ))}
            </div>
            </Page.Content>
            <div className="footer" style={{marginTop: '5rem', padding: '1rem', backgroundColor: '#310a3f', color: '#fff' }}>
          <div className="flex flex-col items-center">
            <Text className='text-lg' style={{ marginBottom: '0.5rem' }}>
              © 2024 Haider's Portfolio | All rights reserved.
            </Text>
            <div className="flex space-x-4">
              <Link href="/privacy" style={{ color: '#fff' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: '#fff'}}>Terms of Service</Link>
            </div>
          </div>
        </div>
            </Page>
            <Drawer visible={state} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <div className='Menu'>
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/portfolio"}><Button>Portfolio</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Link href={"/contact"}><Button>Contact</Button></Link>
          </div>
        </Drawer.Content>
      </Drawer>
        </>
  
}

export default Blog

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};