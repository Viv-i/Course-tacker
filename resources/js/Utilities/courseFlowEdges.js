import { dependencies } from "./courseFlowNodes";

export function createCourseEdges(dependencies) {
    const courseEdges = [];

    for (let i = 0; i < dependencies.length; i++) {
        const [prerequisite, dependents] = dependencies[i];
        if (Array.isArray(dependents)) {
            dependents.forEach((dependent) => {
                courseEdges.push({
                    type: 'smoothstep',
                    source: prerequisite.toString(),
                    target: dependent.toString(),
                    id: `edge-${prerequisite}-${dependent}`
                });
            });
        } else {
            courseEdges.push({
                type: 'smoothstep',
                source: prerequisite.toString(),
                target: dependents.toString(),
                id: `edge-${prerequisite}-${dependents}`
            });
        }
    }
    return courseEdges;
}

const courseEdges = createCourseEdges(dependencies);
export default courseEdges;
