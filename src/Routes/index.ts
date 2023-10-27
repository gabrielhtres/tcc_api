import express, { Response } from 'express';
import userRoutes from './UserRoutes';
import analysisRoutes from './AnalysisRoutes';
import plotRoutes from './PlotRoutes';
import phaseRoutes from './PhaseRoutes';
import diseaseRoutes from './DiseaseRoutes';
import fungicideRoutes from './FungicideRoutes';
import scaleRoutes from './ScaleRoutes';
import authUser from '../Middlewares/authUser';
import { RequestWithToken } from '../Utils/types';
import { UserController } from '../Controllers/UserController';
import multer from 'multer';
import path from 'path';

// Configuração do Multer para salvar as imagens no diretório 'uploads'
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, 'uploads/');
// 	},
// 	filename: function (req, file, cb) {
// 		cb(
// 			null,
// 			file.fieldname + '-' + Date.now() + path.extname(file.originalname),
// 		);
// 	},
// });
// const upload = multer({ storage: storage });

const router = express.Router();
const userController = new UserController();

router.get('/', (req: RequestWithToken, res: Response) => {
	res.send('API GreenVision');
});

router.post('/signup', userController.create.bind(userController));
router.post('/signin', userController.login.bind(userController));
router.post(
	'/validate',
	authUser,
	userController.validateToken.bind(userController),
);

// router.post('/upload-image', upload.single('image'), (req, res) => {
// 	console.log('req.file', req.file);
// 	// const fileImage = new File([req.body.image], 'image.png', {
// 	// 	type: 'image/png',
// 	// });
// 	// console.log(req.body);
// 	// console.log('req.file', req.file);
// 	res.send('Imagem enviada com sucesso!');
// });

router.use('/user', userRoutes);
router.use('/analysis', analysisRoutes);
router.use('/plot', plotRoutes);
router.use('/phase', phaseRoutes);
router.use('/disease', diseaseRoutes);
router.use('/fungicide', fungicideRoutes);
router.use('/scale', scaleRoutes);

export default router;
