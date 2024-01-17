import { useEffect } from "react";
import { scrollAnimation } from "../utils/utils";

type sectionNameType = 'about' | 'pricing' | 'reviewer' | 'card' | 'moviedetail';
export const useScrollAnimation = (sectionName: sectionNameType) => {
    useEffect(() => {
        scrollAnimation(sectionName).start();
        return () => {
            scrollAnimation(sectionName).stop();
        }
    }, [sectionName])
}