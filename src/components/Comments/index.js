import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const ChangeName = event => {
    setName(event.target.value)
  }
  const ChangeComment = event => {
    setComment(event.target.value)
  }
  const newComment = {
    id: uuidv4(),
    name,
    commentText,
  }
  const Submitted = event => {
    event.preventDefault()
    setCommentList(prevList => [...prevList, newComment])
    setName('')
    setComment('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={Submitted}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={ChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={ChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachItem => (
          <CommentItem commentDetails={eachItem} key={eachItem.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
