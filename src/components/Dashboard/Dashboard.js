import React, { Component } from 'react';
import { updateUser } from '../../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import searchLogo from './../../assets/search_logo.png';
import './Dashboard.css';

class Private extends Component {

    state = {
        search: '',
        myPosts: true,
        posts: [],
        loading: true
    }

    // componentDidMount() {
    //     this.grabPosts();
    //   }
    //   grabPosts() {
    //     let { search, myPosts } = this.state;
    //     let url = '/api/posts';
    //     if (myPosts && !search) {
    //       url += '?mine=true';
    //     } else if (!myPosts && search) {
    //       url += `?search=${search}`;
    //     } else if (myPosts && search) {
    //       url += `?mine=true&search=${search}`;
    //     }
    //     axios.get(url)
    //       .then(res => {
    //         setTimeout(_ => this.setState({ posts: res.data, loading: false }), 500)
    //       })
    //   }

    render() {
        let posts = this.state.posts.map((el) => {
            return <Link to={`/post/${el.post_id}`} key={el.post_id}>
                <div className='content_box dash_post_box'>
                    <h3>{el.title}</h3>
                    <div className='author_box'>
                        <p>by {el.author_username}</p>
                        <img src={el.profile_pic} alt='author' />
                    </div>
                </div>
            </Link>
        })
        return (
            <div className='dash'>
                <div className='content_box dash_filter'>
                    <div className='dash_search_box'>
                        <input value={this.state.search} onChange={e => this.setState({ search: e.target.value })} className='dash_search_bar' placeholder='Search by Title' />
                        <img onClick={this.grabPosts} className='dash_search_button' src={searchLogo} alt='search' />
                        <button onClick={this.reset} className='dark_button' id='dash_reset'>Reset</button>
                    </div>
                    <div className='dash_check_box'>
                        <p>My Posts</p>
                        <input checked={this.state.myPosts} onChange={_ => this.setState({ myPosts: !this.state.myPosts }, this.grabPosts)} type='checkbox' />
                    </div>
                </div>
                <div className='content_box dash_posts_container'>
                    {/* {!this.state.loading
                        ?
                        posts
                        :
                        <div className='load_box'>
                            <div className='load_background'></div>
                            <div className='load'></div>
                        </div>
                    } */}
                    {posts}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('redux store state: ', state)
    return state
}


export default connect(mapStateToProps, { updateUser })(Private);