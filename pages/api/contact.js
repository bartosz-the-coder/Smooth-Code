// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  console.log(req.body);
  res.status(200).json('sent')
}