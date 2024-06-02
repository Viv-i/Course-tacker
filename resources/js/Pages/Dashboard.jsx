import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import courses from '../Utilities/BsitCourses';
import React, { useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background
} from 'reactflow';

import 'reactflow/dist/style.css';


export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>

            <Head title="Dashboard" />

            <div style={{ width: '100vw', height: '80vh' }}>
                <ReactFlow>

                    <Controls />
                    <Background variant='dots' gap={22} size={2} color='rgba(255,255,255,0.5)' />                
                    </ReactFlow>
            </div>

        </AuthenticatedLayout>
    );
}
