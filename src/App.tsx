import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./App.module.css";
import "./global.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CETO @Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2025-01-01 19:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/CaueJoseOliveiraFalcao.png",
      name: "Caue Oliveira",
      role: "Estágiario FullStack"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2025-01-04 19:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </>
  );
}
