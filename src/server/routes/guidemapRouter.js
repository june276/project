import express from 'express';
import GuidemapSchema from '../schemas/guidemapSchema.js';

const guidemapRouter = express.Router();

guidemapRouter.get('/guideMap/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const guidemap = await GuidemapSchema.findOne({ id: parseInt(id, 10) });
      if (guidemap) {
          res.json(guidemap);
      } else {
          res.status(404).json({ message: '가이드 맵을 찾을 수 없습니다.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: '서버 에러가 발생했습니다.' });
  }
});

export default guidemapRouter;