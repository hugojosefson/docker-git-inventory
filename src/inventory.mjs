import stacks from './effects-docker/stacks.mjs'
import stackToTasks from './effects-docker/stack-to-tasks.mjs'
import taskToDetails from './effects-docker/task-to-details.mjs'
import serviceToDetails from './effects-docker/service-to-details.mjs'
import serviceName from './effects-docker/service-name.mjs'
import imageToLabels from './effects-docker/image-to-labels.mjs'
import serviceToLabels from './effects-docker/service-to-labels.mjs'

/**
 * Takes an inventory of currently running Docker stacks.
 *
 * @returns {Highland.Stream<object>} A Highland stream of objects, each describing one service.
 */
export default () =>
  stacks()
    .flatMap(stackToTasks)
    .flatMap(taskToDetails)
    .flatMap(serviceToDetails)
    .map(serviceName)
    .flatMap(imageToLabels)
    .flatMap(serviceToLabels)
