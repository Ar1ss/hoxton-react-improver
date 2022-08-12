import { useState } from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState(
    [{
      id: 2,
      name: "Luffy",
      description: "I love meat.",
      profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
      image: "https://realfood.tesco.com/media/images/RFO-1400x919-Slow-roasted-beef-with-mustard-potatoes-dec8429a-d847-469f-a752-5d789755ea17-0-1400x919.jpg",
      likes: 123,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 1,
      name: "Zoro",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
      image: "https://c4.wallpaperflare.com/wallpaper/995/589/273/metal-katana-wakizashi-aspect-wallpaper-preview.jpg",
      likes: 343,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },

    {
      id: 3,
      name: "Sanji",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://i.pinimg.com/736x/7c/53/a6/7c53a68e076d42eaa20ee5a02bc5ec03.jpg",
      image: "https://media.franciscanhealth.org/-/blog-images/thirdhand-smoke.jpg?rev=770b6439b8a54f3db432d7cea3e8526e",
      likes: 234,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 4,
      name: "Nami",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://i.pinimg.com/736x/53/0b/b5/530bb56bc59d4329a56a520284df88bd.jpg",
      image: "https://www.marxist.com/images/stories/economy/Money_-_Pictures_of_Money--Flickr_flickr.com--photos--pictures-of-money--17123251389.jpg",
      likes: 2365,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 5,
      name: "Robin",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://staticg.sportskeeda.com/editor/2022/04/6a000-16496991852048-1920.jpg",
      image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
      likes: 3276,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 6,
      name: "Usopp",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://i.pinimg.com/originals/ea/4c/55/ea4c55d417b14db18764642e908c5f83.jpg",
      image: "https://www.thedefensepost.com/wp-content/uploads/2022/04/220413-F-F3456-1001-scaled.jpg",
      likes: 65,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 7,
      name: "Chopper",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://pbs.twimg.com/profile_images/1126165891127889920/_so4Fa-7_400x400.png",
      image: "https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
      likes: 76,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 8,
      name: "Franky",
      description: "SUUUUUUUUUUUPEEER.",
      profileIamge: "https://shogi-pineapple.com/wp-content/uploads/2021/12/1639675797_One-Piece-This-is-how-Franky-would-look-as-an.jpg",
      image: "http://www.kieskallc.com/upload/category/1615628218COCA-COLA-DRINK.jpg",
      likes: 1254,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 9,
      name: "Brook",
      description: "YO - HO - HO - HO - HO - HO.",
      profileIamge: "http://pm1.narvii.com/6251/70676ae63b0f1e817928d5578ac050e8301c3240_00.jpg",
      image: "https://www.rbb-online.de/content/dam/rbb/rbb/rbb24/2021/2021_07/imago-images/imago0120007604h-1.jpg.jpg/quality=192/size=708x398.jpg",
      likes: 765,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 10,
      name: "Jinbei",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet alias minima et, id odio dolorem asperiores quod, unde, earum molestiae tenetur laudantium in? Tenetur assumenda nam beatae dolor non.",
      profileIamge: "https://static.zerochan.net/Jinbei.full.3508904.jpg",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-1001682.jpg&fm=jpg",
      likes: 345,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    },
    {
      id: 11,
      name: "Yamato",
      description: "I am Oden.",
      profileIamge: "https://i.pinimg.com/originals/cd/a3/31/cda3315166927ff4ba77a636ea834fb7.jpg",
      image: "https://wallpaperaccess.com/full/5048464.jpg",
      likes: 754,
      comments: [
        {
          id: 1,
          name: "Monkey D. Luffy",
          profileIamge: "https://assets.puzzlefactory.com/puzzle/386/460/original.jpg",
          comment: "I love meat."
        },
        {
          id: 2,
          profileIamge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU2BOPrrsLbicLh8NlVULShl2cRB20lVNzw&usqp=CAU",
          name: "Roronoa Zoro",
          comment: "I love swords."
        }
      ]
    }

    ]
  )

  return (
    <div className="App">
      <header className='header'>
        <h1>ONE PIECEgram</h1>
      </header>
      <form className='form'>
        <h1>New Post</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Profile Image" />
        <input type="text" placeholder="Image" />
        <button className='submit-post__button' type="submit">Post</button>

      </form>
      <div className='post-items'>
        {posts.map(post => (
          <div className='post' key={post.id}>

            <div className='profile-image-name'>
              <img className='profile-image' width={100} src={post.profileIamge} alt="" />
              <h2>{post.name}</h2>
            </div>

            <div className='post-image'>
              <img className='post-image' width={500} src={post.image} alt="" />
              <p>{post.description}</p>
            </div>

            <div className='likes'>



              <p>{post.likes} Likes</p>
              <button
                onClick={() => {
                  setPosts(posts.map(p => p.id === post.id ? { ...p, likes: p.likes + 1 } : p))
                }}
              >
                ♥
              </button>
            </div>

            <div>
              <h3 className='coments-title'>Coments</h3>
              <div >
                {post.comments.map(comment => (
                  <div className='coments' key={comment.id}>
                    <img src ={comment.profileIamge} width={40} alt="" />
                    <p>{comment.name}</p>
                    <p>{comment.comment}</p>
                    <button className='delete-button'
                      onClick={() => {
                        setPosts(posts.map(p => p.id === post.id ? { ...p, comments: p.comments.filter(c => c.id !== comment.id) } : p))
                      }
                    }>
                      x
                    </button>
                  </div>
                ))}
              </div>

              <form className='coments-form'>
                <input className='coment-form' type="text" placeholder="Name" />
                <input className='coment-form' type="text" placeholder="Comment" />
                <button className='submit-comment__button' type="submit">Comment</button>
              </form>
            </div>




          </div>

        ))}

        <div>

        </div>
      </div>
    </div>
  )
}

export default App
