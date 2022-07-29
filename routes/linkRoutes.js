import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Link from '../link.model.js'

const router = express.Router()

router.route('/').get(
	expressAsyncHandler(async (req, res) => {
		const links = await Link.find({})

		return res.json(links)
	})
)

router.route('/').put(
	expressAsyncHandler(async (req, res) => {
		const { _id, title, domain, url, subTitle } = req.body

		const link = await Link.findByIdAndUpdate(
			_id,
			{
				title,
				domain,
				url,
				subTitle,
			},
			{ new: true }
		)

		res.json(link)
	})
)

router.route('/').post(
	expressAsyncHandler(async (req, res) => {
		const { title, domain, url, subTitle } = req.body

		const link = await Link.create({
			title,
			domain,
			url,
			subTitle,
		})

		res.json(link)
	})
)

export default router
