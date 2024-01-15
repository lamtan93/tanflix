import { useLocation, matchPath } from "react-router-dom"

export const useIsCurrentPathActive = (pathToCheck: string) => {
    const { pathname } = useLocation();
    return !!matchPath(pathToCheck, pathname);
}