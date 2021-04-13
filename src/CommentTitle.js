import React, { useState } from "react";

function CommentTitle(props) {
    const [data] = useState(props.data);

    const [selectedData, updateSelectedData] = useState("");
    function handleChange(event) {
        updateSelectedData(event.target.value);
        if (props.onSelectChange) props.onSelectChange(selectedData);
    }
    return (
        <tr>
            <td style={{ border: '1px solid #dddddd' }}>
                <tr>
                    onChange={handleChange}
                    <td>{data.title}</td>
                </tr>
            </td>
        </tr>
    );
}
export default CommentTitle;