import React from 'react'
import { connect } from 'react-redux'
import { addPostAC, changeTextAreaAC } from '../../../../Redux/profilePageReducer'
import Posts from './Posts'
import Post from './SinglePost'


const mapStateToProps = (state)=>{return {
    newPostText: state.postPage.newPostText,
    posts: state.postPage.posts.map(el=>{return(<Post text={el.text} id={el.id}/>)}),
}}
const mapDispatchToProps = (dispatch)=>{return {
    addPost:()=>{dispatch(addPostAC())},
    changeNewText:(postText)=> {dispatch(changeTextAreaAC(postText))},
}}

const PostsContainer1 = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer1