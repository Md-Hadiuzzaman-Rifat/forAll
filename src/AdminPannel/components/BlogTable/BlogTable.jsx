import React from 'react';
import "./BlogTable.scss"
import { ImBin } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';

const BlogTable = () => {
    const handleEdit=()=>{}
    const handleDelete=()=>{}
    return (
        <div className="blogTable">
        <table>
          <thead>
            <tr>
              <th>Heading</th>
              <th>Image</th>
              <th>Article</th>
              <th>action</th>
            </tr>
          </thead>

          <tbody>
            
              <tr>
                <td>Heading</td>
                <td>image</td>
                <td>article</td>
                <td>
                  <span
                    className=""
                    onClick={() => handleDelete()}
                  >
                    <ImBin />{" "}
                  </span>
                  <span className="" onClick={()=>handleEdit()}>
                      <FiEdit style={{color:"black"}}/>
                  </span>
                </td>
              </tr>
            
          </tbody> 
        </table>
    </div>
    );
};

export default BlogTable;