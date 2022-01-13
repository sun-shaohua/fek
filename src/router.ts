import {lazy} from "react";
import {RouteObject} from "react-router-dom";

export const router: RouteObject[] = [
    {
        path: "/app",
        element: lazy(() => import('./view/FilterImage')),
    }
];
