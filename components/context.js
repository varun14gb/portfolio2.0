import { useReducer, useContext, createContext } from 'react'

const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state === 'dark' ? 'light' : 'dark';
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 'light')
  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeStateContext)
export const useDispatchTheme = () => useContext(ThemeDispatchContext)