import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    applyEdgeChanges,
    applyNodeChanges,
    useNodesState,      // for save and restore nodes
    useEdgesState,      //
    useReactFlow,       //
    ReactFlowProvider,  //
    Panel,              //
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '../Components/CustomNode';
import nodeCreator from '../Utilities/NodeCreator.js';
import dependents from '../Utilities/Dependents.js';
import edgeCreator from '../Utilities/EdgeCreator.js';

const nodeTypes = { customNode: CustomNode }; 

const flowkey = 'dashboard-flow';
const getNodeId = () => `randomnode_${+new Date()}`;

function SaveRestore({ auth, courses, flowKey = 'dashboard-flow'}) {

    const dependencies = dependents(courses);
    const initialNodes = nodeCreator(courses, dependencies);
    const initialEdges = edgeCreator(dependencies);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [rfInstance, setRfInstance] = useState(null);
    const { setViewport } = useReactFlow();

    
    const onSave = useCallback(() => {
        if (rfInstance) {
          const flow = rfInstance.toObject();
          localStorage.setItem(flowKey, JSON.stringify(flow));
          window.alert('Changes have been saved successfully');
        }
    }, [rfInstance]);

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = JSON.parse(localStorage.getItem(flowKey));
        
            if (flow) {
                const { x = 0, y = 0, zoom = 1 } = flow.viewport;
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
                setViewport({ x, y, zoom });
            }
        };
        restoreFlow();
        window.alert('Displayed Course Flow successfully');
    }, [setNodes, setViewport]);

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div style={{ width: '100vw', height: '80vh' }}>

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onInit={setRfInstance}
                    nodeTypes={nodeTypes}
                    snapToGrid={true}
                    snapGrid={[10, 10]}
                >
                <Panel position="top-right">
                    <div className='flex gap-2'>
                        <button className="flex gap-2 items-center px-2 py-2 text-white bg-custom-blue hover:bg-blue-400 rounded"  onClick={onSave}>
                            <p>Save</p>
                            <svg fill="#0F0F0F" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <path d="M440.125,0H0v512h512V71.875L440.125,0z M281.6,31.347h31.347v94.041H281.6V31.347z M136.359,31.347h113.894v125.388
                                                h94.041V31.347h32.392v156.735H136.359V31.347z M417.959,480.653H94.041V344.816h323.918V480.653z M417.959,313.469H94.041
                                                v-31.347h323.918V313.469z M480.653,480.653h-31.347V250.775H62.694v229.878H31.347V31.347h73.665v188.082h303.02V31.347h19.108
                                                l53.512,53.512V480.653z"/>
                                        </g>
                                    </g>
                            </svg>
                        </button>
                        <button className="flex gap-2 items-center px-2 py-2 text-white bg-custom-blue hover:bg-blue-400 rounded"  onClick={onRestore}>
                            <p>Restore</p>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.52185 7H7C7.55229 7 8 7.44772 8 8C8 8.55229 7.55228 9 7 9H3C1.89543 9 1 8.10457 1 7V3C1 2.44772 1.44772 2 2 2C2.55228 2 3 2.44772 3 3V5.6754C4.26953 3.8688 6.06062 2.47676 8.14852 1.69631C10.6633 0.756291 13.435 0.768419 15.9415 1.73041C18.448 2.69239 20.5161 4.53782 21.7562 6.91897C22.9963 9.30013 23.3228 12.0526 22.6741 14.6578C22.0254 17.263 20.4464 19.541 18.2345 21.0626C16.0226 22.5842 13.3306 23.2444 10.6657 22.9188C8.00083 22.5931 5.54702 21.3041 3.76664 19.2946C2.20818 17.5356 1.25993 15.3309 1.04625 13.0078C0.995657 12.4579 1.45216 12.0088 2.00445 12.0084C2.55673 12.0079 3.00351 12.4566 3.06526 13.0055C3.27138 14.8374 4.03712 16.5706 5.27027 17.9625C6.7255 19.605 8.73118 20.6586 10.9094 20.9247C13.0876 21.1909 15.288 20.6513 17.0959 19.4075C18.9039 18.1638 20.1945 16.3018 20.7247 14.1724C21.2549 12.043 20.9881 9.79319 19.9745 7.8469C18.9608 5.90061 17.2704 4.3922 15.2217 3.6059C13.173 2.8196 10.9074 2.80968 8.8519 3.57803C7.11008 4.22911 5.62099 5.40094 4.57993 6.92229C4.56156 6.94914 4.54217 6.97505 4.52185 7Z" fill="#0F0F0F"/>
                            </svg>
                        </button>
                    </div>
                </Panel>
                <Controls />
                <Background variant='dots' gap={20} size={2} color='rgba(255,255,255,0.5)' />                
                </ReactFlow>
            </div>
        </AuthenticatedLayout>

    );
}
    
export default ({auth, courses}) => (
    <ReactFlowProvider>
      <SaveRestore
        auth={auth}
        courses={courses}
        />
    </ReactFlowProvider>
);

