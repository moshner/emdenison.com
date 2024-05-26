import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
};

export default useScrollToTop