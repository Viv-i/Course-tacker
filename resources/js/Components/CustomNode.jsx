import React from 'react';
import { Handle, Position } from 'reactflow';

function canBeTakenNextTerm(currentTerm, term) {
  if (currentTerm + 1 === term) {
    return true;
  }

  if (currentTerm === 3 && term === 1) {
    return true;
  }

  return false;
}


function CustomNode({ data }) {
  const currentTerm = 3;
  const currentTaken = ['ITIA 121', 'ITSI 118', 'ITCI 103'];

  let bgColor = 'bg-white'; 
  let border = 'border-2 border-custom-gray';

  if (data.grade === null) {
    if (canBeTakenNextTerm(currentTerm, data.term)) {
      border =  'outline outline-offset-2 outline-8 outline-custom-blue outline-dashed';
    } else {
      bgColor = 'bg-custom-white';
    }
  } else if (data.grade <= 3 && data.grade !== 0) {
      bgColor = 'bg-custom-green';
  } else if (data.grade > 3 || data.grade === 0) {
      if (canBeTakenNextTerm(currentTerm, data.term)) {
        border =  'outline outline-offset-2 outline-8 outline-custom-blue outline-dashed';
      } else {
        bgColor = 'bg-custom-red';
      }
  }

  if (currentTaken.includes(data.code)) {
    border = 'outline outline-offset-2 outline-8 outline-custom-orange outline-dashed';
  }

  return (
    <article className={`w-64 h-24 px-4 py-2 shadow-md rounded-md ${border} flex-col ml-2 overflow-y-auto ${bgColor} ${data.id}`}>
      <h3 className="text-lg font-bold">{data.code}</h3>
      <p className="text-custom-gray text-wrap">{data.description}</p>

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
