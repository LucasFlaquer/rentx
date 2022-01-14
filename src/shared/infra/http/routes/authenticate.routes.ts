import { Router } from "express";

import { AuthenticateUserControlller } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserControlller();
const authenticateRoutes = Router();
authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };
