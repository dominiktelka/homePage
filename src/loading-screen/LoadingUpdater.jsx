import {useProgress} from "@react-three/drei";
import {useEffect} from "react";

export default function LoadingUpdater({setIsLoading}) {

    const {progress} = useProgress()

    useEffect(() => {
        if (progress === 100) {
            setIsLoading(false)
        }
    }, [progress])

    return null;
}
