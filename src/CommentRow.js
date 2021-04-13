import React, {useState} from "react";
import Logo from './comment.png';

function CommentRow(props) {
    const [data] = useState(props.data);
  
    return (
        <tr>
            <td style = {{border: '1px solid #dddddd'}}>
              <tr>
              <td style = {{width: '80px'}}><img src={Logo} style = {{width: '40px', height: '50px'}}/></td>
              <td>{data.name}</td>
              </tr>
            </td>
        </tr>
      );
  }
export default CommentRow;