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

return <> <Page className="flex items-center">
            <Page.Header style={{ color: palette.successLight }}>
              <Text className='text-3xl' h1>Welcome to Haider's Blog</Text>
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
            <Page.Footer>
              <h2>Here we go</h2>
            </Page.Footer>
            </Page>
            <Drawer visible={state} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/portfolio"}><Button>Portfolio</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Link href={"/contact"}><Button>Contact</Button></Link>
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