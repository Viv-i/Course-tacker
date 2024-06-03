import courses from './BsitCourses.js';

function dependents(courses) {
    return courses
        .filter(course => course.prerequisite_id !== null)
        .map(course => {
            return { 
                prerequisite_id: courses.find(c => c.id === course.prerequisite_id).id, 
                dependent_id: course.id 
            };
        });
}


function createCourseNodes(courses, dependents) {
    const positions = {};

    return courses.map((course) => {
        const yearTermKey = `${course.year}-${course.term}`;

        // Initialize position if not already set
        if (!positions[yearTermKey]) {
            positions[yearTermKey] = {
                x: (course.term - 1) * 410, // Adjust spacing between columns
                y: 0
            };
        } else {
            positions[yearTermKey].y += 150; // Adjust spacing between rows
        }

        let data = {
            id: course.id.toString(),
            code: course.code,
            description: course.description
        }

        return {
            id: course.id.toString(), // id should be a string
            type: 'customNode',
            data: data,
            position: { 
                x: positions[yearTermKey].x,
                y: positions[yearTermKey].y
            }
        };
    });
}

const courseDependents = dependents(courses);
const courseNodes = createCourseNodes(courses, courseDependents);

export default courseNodes;
