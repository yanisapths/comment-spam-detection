import React, { useState } from 'react';
interface Comment {
  id: number;
  text: string;
}
const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    // checks if the trimmed ver. of newComment is not empty (remove whitespace) which compare to empty comment string (`''`), 
    if (newComment.trim() !== '') {
      // if true, create a new object called newCommentObj with unique id & text"
      const newCommentObj: Comment = {
        id: Date.now(),
        text: newComment.trim(),
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddComment();
    }
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src="/avatar/a3.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-black"
        />
        <button
          className="text-sm bg-black hover:bg-black/90 hover:shadow-xl text-white p-3 rounded-xl"
          onClick={handleAddComment}
        >
          Add
        </button>
      </div>

      <div className="space-y-6">
        {/* New Comment */}
        {comments.map((comment) => (

          <div className="flex space-x-4" key={comment.id}>

            <img
              src="/avatar/a3.png"
              alt="User Avatar"

              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex gap-3">
                <h4 className="text-lg font-bold">Guest User</h4>
                <p>{new Date(comment.id).toLocaleString()}</p>
              </div>

              <p className="text-gray-600">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
        {/* Default Comment */}
        <div className="flex space-x-4">

          <img
            src="/avatar/a1.png"
            alt="User Avatar"

            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex gap-3">
              <h4 className="text-lg font-bold">John Doe</h4>
              <p>3/18/2021, 6:52:16 PM</p>
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non mattis mauris. Fusce congue, magna eu feugiat accumsan, ex
              lorem malesuada urna, id viverra est nunc id orci.
            </p>
          </div>
        </div>

        {/* Comment */}
        <div className="flex space-x-4">
          <img
            src="/avatar/a2.png"
            alt="User Avatar"

            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex gap-3">
              <h4 className="text-lg font-bold">Jane Smith</h4>
              <p>2/11/2021, 3:10:00 PM</p>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non mattis mauris. Fusce congue, magna eu feugiat accumsan, ex
              lorem malesuada urna, id viverra est nunc id orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
