import {Router} from 'express';
export default interface Routes {
    router: Router;
    getAllRoutes: () => Router;
    createRoutes: () => void;
}