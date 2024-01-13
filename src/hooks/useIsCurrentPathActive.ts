import { useLocation, matchPath } from "react-router-dom"

export const useIsCurrentPathActive = (pathToCheck: string) => {
    const { pathname } = useLocation();
    const isCurrentPathActive = !!matchPath(pathToCheck, pathname);

    return {
        isCurrentPathActive
    }
}