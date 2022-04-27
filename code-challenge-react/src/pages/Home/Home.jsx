import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Avatar from '../../Components/molecules/Avatar/Avatar';
import CardPost from '../../Components/organisms/CardPost/CardPost';
import {useNavigate} from 'react-router';
import './Home.css';
import Sliders from '../../Components/organisms/Sliders/Sliders';

const Home = () => {
  const navigate = useNavigate();
  const {users, posts} = useSelector(state => state.storeInitialData);
  const [arrayPosts, setArrayPosts] = useState([]);

  const handleClickComents = postId => {
    navigate(`/Comments/${postId}`);
  };
  const filterPosts = id => {
    let auxArray = posts.filter(post => post.userId === id);
    console.log(auxArray);
    setArrayPosts(auxArray);
  };
  useEffect(() => {
    console.log();
    if (posts.length > 0) {
      setArrayPosts(posts);
    }

    return () => {};
  }, [posts, setArrayPosts]);

  return (
    <React.Fragment>
      <div className="Layaout-Item animate__animated animate__fadeIn">
        <Sliders>
          {users.map((user, index) => {
            return (
              <div className="CI-Avatar-Home" key={index} onClick={() => filterPosts(user.id)}>
                <Avatar name={user.name}></Avatar>
              </div>
            );
          })}
        </Sliders>
        <div className="CP-Home">
          {arrayPosts.map((post, index) => {
            return (
              <CardPost
                dataPost={post}
                key={index}
                handleClickComents={handleClickComents}
              ></CardPost>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
