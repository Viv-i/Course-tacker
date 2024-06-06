import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    applyEdgeChanges,
    applyNodeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '../Components/CustomNode';
import nodeCreator from '../Utilities/NodeCreator.js';
import dependents from '../Utilities/Dependents.js';
import edgeCreator from '../Utilities/EdgeCreator.js';

const currentTerm = 3;
const nodeTypes = { customNode: CustomNode }; 

export default function Dashboard({ auth, courses }) {
    const dependencies = dependents(courses);
    const initialNodes = nodeCreator(courses, dependencies);
    const initialEdges = edgeCreator(dependencies);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div style={{ width: '100vw', height: '80vh' }}>
                <ReactFlow
                    nodes={nodes} 
                    onNodesChange={onNodesChange}
                    edges={edges} 
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                >
                    <Controls />
                    <Background variant='dots' gap={22} size={2} color='rgba(255,255,255,0.5)' />                
                </ReactFlow>
            </div>
        </AuthenticatedLayout>
    );
}
