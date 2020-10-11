import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';

const ProvidersRouter = Router();
const providersController = new ProvidersController();

ProvidersRouter.use(ensureAuthenticated);

// ProvidersRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find();
//
//   return res.json(appointments);
// });

ProvidersRouter.get('/', providersController.index);

export default ProvidersRouter;
