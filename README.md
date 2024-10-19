In the Task Management App, tasks are sorted based on their priority and completion status to enhance user experience. The sorting mechanism is implemented as follows:

🚀Tasks can have three priority levels: High, Medium, and Low. Each level is assigned a numeric value:

🚀 High priority is represented as -> 1
🚀 Medium priority is represented as -> 2
🚀 Low priority is represented as -> 3

🚀The initial sorting is done based on the priority values, ensuring that tasks with higher importance (lower numeric values) appear first in the list.

🚀After sorting by priority, a second sort operation is performed to rearrange the tasks based on their completion status. Completed tasks (marked as true) are moved to the bottom of the list, while pending tasks (marked as false) remain at the top.

🚀The sorting is achieved using the JavaScript Array sort() method. The tasks array is first sorted by priority, followed by sorting based on the completion status.