import courses from './BsitCourses.js';

function dependents(courses) {
    const dependencies = [];

    courses.forEach(course => {
        if (course.prerequisite_id !== null) {
            const prerequisite_id = course.prerequisite_id;
            const dependent_id = course.id;

            const existingDependency = dependencies.find(dep => dep[0] === prerequisite_id);
            if (existingDependency) {
                if (!Array.isArray(existingDependency[1])) {
                    existingDependency[1] = [existingDependency[1]];
                }
                existingDependency[1].push(dependent_id);
            } else {
                dependencies.push([prerequisite_id, [dependent_id]]);
            }
        }
    });

    return dependencies;
}

function createCourseNodes(courses, dependencies) {
    const positions = {};

    return courses.map((course) => {
        const yearTermKey = `${course.year}-${course.term}`;

        if (!positions[yearTermKey]) {
            positions[yearTermKey] = {
                x: (course.term - 1) * 410,
                y: 0
            };
        } else {
            positions[yearTermKey].y += 150;
        }

        let data = {
            id: course.id.toString(),
            code: course.code,
            description: course.description,
            prerequisite_id: course.prerequisite_id
        };

        const courseDependencies = dependencies.find(dep => dep[0] === course.id);
        if (courseDependencies) {
            data.dependents = courseDependencies[1];
        }

        return {
            id: course.id.toString(),
            type: 'customNode',
            data: data,
            position: {
                x: positions[yearTermKey].x,
                y: positions[yearTermKey].y
            }
        };
    });
}

const dependencies = dependents(courses);
const courseNodes = createCourseNodes(courses, dependencies);

export default courseNodes;
export { dependencies };
