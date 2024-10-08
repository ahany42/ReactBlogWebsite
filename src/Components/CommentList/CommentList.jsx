import Comment from '../Comment/Comment.jsx';
import placeholderImg from '../../Images/Placeholder.svg';
import './CommentList.css';
const CommentList = ({data ,loggedUser}) => {
  if(data.length===0){
    console.log("zero") 
 return (
   <div className="PlaceholderDiv">
 <img src={placeholderImg} className="PlaceholderImage" alt="Placeholder image"/>
 <h3>No Comments To Show</h3>
  </div>
 )
  }
    const newData= data.map((comment)=>(
        <Comment key={comment.id} {...comment} loggedUser={loggedUser}/>
       ))
       console.log(newData);
      
  return (
    <div className="CommentList">
    {newData}
    </div>
  )
}

export default CommentList
