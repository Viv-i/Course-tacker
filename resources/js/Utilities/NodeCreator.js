export default function createCourseNodes(courses, dependencies) {
    const positions = {};

    return courses.map((course) => {
        const yearTermKey = `${course.year}-${course.term_id}`;

        if (!positions[yearTermKey]) {
            positions[yearTermKey] = {
                x: (course.year - 1) * 1230 + (course.term_id - 1) * 410,        
                y: 0
            };
        } else {
            positions[yearTermKey].y += 150;
        }

        let data = {
            id: course.id.toString(),
            code: course.course_code,
            description: course.course_description,
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
            },
            draggable: true,
            selectable: true
        
        };
    });
}
