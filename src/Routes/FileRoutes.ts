import express from 'express';
import multer from 'multer';
import path from 'path';

// Configuração do Multer para salvar as imagens no diretório 'uploads'
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log('file', file);
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname),
		);
	},
});
const upload = multer({ storage: storage, dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
	if (!req.file) return res.status(400).json({ message: 'No file provided' });

	return res.status(203).json({ filename: req.file.filename });
});

router.get('/:filename', (req, res) => {
	const { filename } = req.params;

	return res.sendFile(filename, {
		root: 'uploads',
	});
});

export default router;
