import {Router} from 'express';
export default interface IRoutes {
    router: Router;
    getAllRoutes: () => Router;
    createRoutes: () => void;
}