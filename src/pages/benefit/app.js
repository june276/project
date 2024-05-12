import express from 'express';
import connect from './connect.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import BenefitSchema from './benefit_schema.js';
import benefitRouter from './benefit_router.js';
import benefitExplainRouter from '../benefitexplain/benefitExplain_router.js';
import BenefitInfoSchema from '../benefitexplain/benefit_explain_shema.js';

const port = 8000;
const app = express();
connect();

app.use(bodyParser.json())
app.use(cors())
app.use('/benefit', benefitRouter);
app.use('/benefitExplain', benefitExplainRouter);
app.listen(port, ()=>{
	console.log(`server start on ${port}`);
})

// const benefitInfoUpdate = await BenefitInfoSchema.findOne({ref_id: "661cab5770f2928aa8a761cc"}).populate("contents");
// console.log(benefitInfoUpdate);
// await BenefitInfoSchema.updateOne(benefitInfoUpdate, {description: "* 본인 40% 및 동반 3인 20~30%",});

// const benefitUpdate = await BenefitSchema.findOne({_id: "66406765decb2e1228e8e268"});
// console.log(benefitUpdate);
// await BenefitSchema.updateOne(benefitUpdate, {img: "https://adventure.lotteworld.com/image/2024/5/202405080454534050_231.jpg"});

const benefitInfoInserted = await BenefitInfoSchema.create(
	{
		ref_id: '664076067b907b2f798e8212',
		title: "케이뱅크 봄나들이 이벤트",
		start_at: "2024-04-01",
		end_at: "2024-06-30",
		description: "*롯데월드 홈페이지를 통해 회원가입 후, 케이뱅크 계좌를 최초 신규개설한 고객",
		contents : [
			[			
				{
					title: '어드벤처 서울 1일권',
					original_price: 62000,
					discounted_price: 31000,
				},
				{
					title: '어드벤처 부산 1일권',
					original_price: 47000,
					discounted_price: 23500,
				},
				{
					title: '아쿠아리움 입장권',
					original_price: 35000,
					discounted_price: 17500,
				},
				{
					title: '서울 스카이 입장권',
					original_price: 31000,
					discounted_price: 15500,
				},
			],
		]
	},
	{
		ref_id: '664076067b907b2f798e8213',
		title: "네이버페이 꽃이 피었습니다",
		start_at: "2024-05-01",
		end_at: "2024-05-31",
		description: "*네이버페이로 현장 결제하면 최대 40% 할인",
		contents : [
			[			
				{
					title: '1일권 어른',
					original_price: 62000,
					discounted_price: 37000,
				},
				{
					title: '1일권 청소년',
					original_price: 54000,
					discounted_price: 32500,
				},
				{
					title: '1일권 어린이',
					original_price: 47000,
					discounted_price: 28500,
				},
			],
			[
				{
					title: '야간권 어른',
					original_price: 50000,
					discounted_price: 30000,
				},
				{
					title: '야간권 청소년',
					original_price: 43000,
					discounted_price: 26000,
				},
				{
					title: '야간권 어린이',
					original_price: 36000,
					discounted_price: 21500,
				},
			],
		]
	},
	{
		ref_id: '664076067b907b2f798e8214',
		title: "SKT 멤버십 (기본제휴)",
		start_at: "2024-05-01",
		end_at: "2024-05-31",
		description: "* 본인 40% 및 동반 3인 20~30%",
		contents : [
			[			
				{
					title: 'VIP, GOLD 1일권 어른',
					original_price: 62000,
					discounted_price: 37200,
					companion:43400,
				},
				{
					title: 'VIP, GOLD 1일권 청소년',
					original_price: 54000,
					discounted_price: 32400,
					companion: 37800,
				},
				{
					title: 'VIP, GOLD 1일권 어린이',
					original_price: 47000,
					discounted_price: 28200,
					companion: 32900,
				},
			],
			[
				{
					title: 'VIP, GOLD 야간권 어른',
					original_price: 50000,
					discounted_price: 30000,
					companion: 35000,
				},
				{
					title: 'VIP, GOLD 야간권 청소년',
					original_price: 43000,
					discounted_price: 25800,
					companion: 30100,
				},
				{
					title: 'VIP, GOLD 야간권 어린이',
					original_price: 36000,
					discounted_price: 21600,
					companion: 25200,
				},
			],
			[
				{
					title: 'SILVER 1일권 어른',
					original_price: 62000,
					discounted_price: 37200,
					companion: 49600,
				},
				{
					title: 'SILVER 1일권 청소년',
					original_price: 54000,
					discounted_price: 32400,
					companion: 43200,
				},
				{
					title: 'SILVER 1일권 어린이',
					original_price: 47000,
					discounted_price: 28200,
					companion: 37600,
				},
			],
			[
				{
					title: 'SILVER 야간권 어른',
					original_price: 62000,
					discounted_price: 30000,
					companion: 40000,
				},
				{
					title: 'SILVER 야간권 청소년',
					original_price: 43000,
					discounted_price: 25800,
					companion: 34400,
				},
				{
					title: 'SILVER 야간권 어린이',
					original_price: 36000,
					discounted_price: 21600,
					companion: 28800,
				},
			],
		]
	},
);

// const benfitInserted = await BenefitSchema.create(
// 	{
// 		title: '케이뱅크 봄나들이 이밴트',
// 		company: 'lotteworld',
// 		start_at: '2024-04-01',
// 		end_at: '2024-06-30',
// 		price: 31000,
// 		benefit_type: 'membership',	
// 		img: 'https://adventure.lotteworld.com/image/2024/3/202403180206135930_231.jpg',
// 	},
// 	{
// 		title: '네이버페이 꽃이 피었습니다',
// 		company: 'lotteworld',
// 		start_at: '2024-05-01',
// 		end_at: '2024-05-31',
// 		price: 37000,
// 		benefit_type: 'membership',
// 		img: 'https://adventure.lotteworld.com/image/2024/4/202404290822481460_231.jpg',
// 	},
// 	{
// 		title: 'SKT 멤버십(기본제휴)',
// 		company: 'lotteworld',
// 		start_at: '2024-05-01',
// 		end_at: '2024-05-31',
// 		price: 37200,
// 		benefit_type: 'membership',
// 		img: 'https://adventure.lotteworld.com/image/2024/4/202404290833397890_231.jpg'
// 	},
// 	{
// 		title: 'KT 멤버십(기본제휴)',
// 		company: 'lotteworld',
// 		start_at: '2024-05-01',
// 		end_at: '2024-05-31',
// 		price: 37200,
// 		benefit_type: 'membership',
// 		img: 'https://adventure.lotteworld.com/image/2024/4/202404290835316330_231.jpg'
// 	},
// 	{
// 		title: 'LG U+ 멤버십(VIP콕)',
// 		company: 'lotteworld',
// 		start_at: '2024-05-01',
// 		end_at: '2024-05-31',
// 		price: 34100,
// 		benefit_type: 'membership',
// 		img: 'https://adventure.lotteworld.com/image/2024/4/202404290837045880_231.jpg'
// 	},
// );