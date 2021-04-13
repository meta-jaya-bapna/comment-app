import React, {useState} from "react";
import CommentRow from "./CommentRow.js";

function Comments(props) {
  const rows = [];
  const [data] = useState(props.data);

  data.forEach((comment) => {
    rows.push(
      <CommentRow
        data={comment}
      />
    );
  });
  return (
          <table>
            <tbody>{rows}</tbody>
          </table>
  );
}
export default Comments;