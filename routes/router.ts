import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo salio bien'
    });
});

router.post('/mensajes', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo salio bien POST'
    });
});

export default router;