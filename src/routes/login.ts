import { Request, Response } from 'express';
import {login} from "../controllers/loginController";

app.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);
        res.json(user);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});
