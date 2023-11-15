import express from 'express';

const router = express.Router();

router.get('/:filename', (req, res) => {
	const { filename } = req.params;

	return res.sendFile(filename, {
		root: 'uploads',
	});
});

export default router;
