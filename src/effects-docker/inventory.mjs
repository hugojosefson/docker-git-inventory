import stacks from './stacks.mjs'
import stackToTasks from './stack-to-tasks.mjs'
import taskToDetails from './task-to-details.mjs'
import serviceToDetails from './service-to-details.mjs'
import serviceName from '../fn/service-name.mjs'
import imageToLabels from './image-to-labels.mjs'
import serviceToLabels from './service-to-labels.mjs'

/**
 * Takes an inventory of currently running Docker stacks.
 *
 * @returns {Highland.Stream<{stack: string, taskId: string, image: string, serviceId: string, serviceNameLong: string, serviceName: string, labels: object}>} A Highland stream of objects, each describing one service.
 */
export default () =>
  stacks()
    .flatMap(stackToTasks)
    .flatMap(taskToDetails)
    .flatMap(serviceToDetails)
    .map(serviceName)
    .flatMap(imageToLabels)
    .flatMap(serviceToLabels)
