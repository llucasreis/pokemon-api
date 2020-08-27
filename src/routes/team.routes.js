import { Router } from 'express';
import { celebrate } from 'celebrate';
import TeamController from '../controllers/TeamController';
import { TeamSchemaValidation } from '../models/schemas/TeamSchema';

const teamsRouter = Router();
const teamController = new TeamController();

teamsRouter.post(
  '/',
  celebrate(TeamSchemaValidation, { abortEarly: false }),
  teamController.create,
);

export default teamsRouter;
