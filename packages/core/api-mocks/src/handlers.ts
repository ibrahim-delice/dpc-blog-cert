/**
 * Combined handlers for all mocked APIs.
 * Add handlers for more mocked APIs below
 */

import { turboApiMockHandlers } from '@turbo-blog/turbo-posts-api-mocks'
import { exampleApiMockHandlers } from '@turbo-blog/example-api-mocks'

// Here you can turn on or off mocking on a per API level
const MOCK_EXAMPLE_API = 1
const MOCK_TURBO_POST_API = 1

// Alternative and readable way of handling multiple mock enablers
// const handlers = []
// if (MOCK_EXAMPLE_API) handlers.push(exampleApiMockHandlers)
// if (MOCK_TURBO_POST_API) handlers.push(turboApiMockHandlers)
// export { handlers }

export const handlers = [
  ...(MOCK_EXAMPLE_API
    ? exampleApiMockHandlers
    : MOCK_TURBO_POST_API
    ? turboApiMockHandlers
    : []),
]
