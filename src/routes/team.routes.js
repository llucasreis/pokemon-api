import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamsRouter = Router();
const teamController = new TeamController();

teamsRouter.post('/', teamController.create);

export default teamsRouter;
