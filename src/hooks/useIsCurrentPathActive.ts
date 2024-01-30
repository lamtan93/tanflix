import { useLocation, matchPath } from 'react-router-dom'

const useIsCurrentPathActive = (pathToCheck: string) => {
  const { pathname } = useLocation()
  return !!matchPath(pathToCheck, pathname)
}

export default useIsCurrentPathActive
