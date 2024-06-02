import courses from './courses';

function createCourseNodes() {
    const positions = {};

    return courses.map((course) => {
        const yearTermKey = `${course.year}-${course.term}`;

        // Initialize position if not already set
        if (!positions[yearTermKey]) {
            positions[yearTermKey] = {
                x: (course.term - 1) * 300, // Adjust spacing between columns
                y: 0
            };
        } else {
            positions[yearTermKey].y += 100; // Adjust spacing between rows
        }

        return {
            id: course.id.toString(), // id should be a string
            data: { 
                code: course.code,
                description: course.description
            },
            position: { 
                x: positions[yearTermKey].x,
                y: positions[yearTermKey].y
            }
        };
    });
}

const courseNodes = createCourseNodes();

export default courseNodes;
