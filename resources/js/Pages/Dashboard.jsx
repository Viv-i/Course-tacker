import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '../Components/CustomNode';
import nodeCreator from '../Utilities/NodeCreator.js';
import dependents from '../Utilities/Dependents.js';
import edges from '../Utilities/EdgeCreator.js';


const nodeTypes = { customNode : CustomNode }; 

export default function Dashboard({ auth, courses}) {
    const dependencies = dependents(courses);
    const initialNodes = nodeCreator(courses, dependencies);
    const initialEdges = edges(dependencies);


    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>

            <Head title="Dashboard" />

            <div style={{ width: '100vw', height: '80vh' }}>
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    nodeTypes={nodeTypes}
                >

                    <Controls />
                    <Background variant='dots' gap={22} size={2} color='rgba(255,255,255,0.5)' />                
                    </ReactFlow>
            </div>

        </AuthenticatedLayout>
    );
}
