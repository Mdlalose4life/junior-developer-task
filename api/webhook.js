export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!req.body){
        return res.status(400).json({error: "Body Must Not Be Empty"})
    }

    const { data } = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: '"data" must be a string' });
    }

    const sortedArray = data.split('').sort();
    res.status(200).json({ word: sortedArray });
}
handler()