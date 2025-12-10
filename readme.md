## Javascript Closure
  A closure is a function that retains access to its outer function's variables, even after the outer function has finished executing. It "remembers" the environment in which it was created, allowing it to access variables outside its immediate scope.

## Key Code Patterns

This project adheres to the following React design patterns:

-   **Container/Presentational Components:** Separating concerns by creating "container" components for data fetching and state management, and "presentational" components for rendering UI.
-   **Higher-Order Components (HOCs):** Reusing component logic through functions that take a component and return a new, enhanced component.
-   **Hooks:** Leveraging React Hooks (e.g., `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, `useRef`) for managing state and side effects in functional components.
-   **Context API:** Global state management for data that needs to be accessible by many components at different nesting levels without prop drilling.
-   **Compound Components:** Creating flexible and reusable component sets where components work together implicitly.
