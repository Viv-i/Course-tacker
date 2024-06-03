import React from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
      <article className={`w-64 h-24 px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 flex-col ml-2 overflow-y-auto ${data.id}`}>
            <h3 className="text-lg font-bold">{data.code}</h3>
            <p className="text-gray-500  text-wrap">{data.description}</p>

        {data.prerequisite_id && (
          <Handle type="target" position={Position.Left} className="w-16 !bg-teal-500" />
        )}
        
        {data.dependents && (
          <Handle type="source" position={Position.Right} className="w-16 !bg-teal-500" />
        )}
      </article>
  );
}

export default CustomNode;
