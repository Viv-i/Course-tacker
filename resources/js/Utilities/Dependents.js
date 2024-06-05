export default function dependents(courses) {
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