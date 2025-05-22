// const axios = require('axios');
// require('dotenv').config();

// const summarizeTodos = async (req, res) => {
//     try {
//         const { todos } = req.body;

//         if (!todos || !Array.isArray(todos)) {
//             return res.status(400).json({ error: 'Todos array is required' });
//         }

//         const textToSummarize = todos
//             .map((todo, index) => `${index + 1}. ${todo.title} - ${todo.description || ''}`)
//             .join('\n');

//         const apyKey = process.env.APYHUB_API_KEY;

//         if (!apyKey) {
//             return res.status(500).json({ error: 'ApyHub API key missing' });
//         }

//         const response = await axios.post(
//             'https://api.apyhub.com/utility/ai/summarize',
//             {
//                 text: textToSummarize,
//                 length: 'short',
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'apy-token': apyKey,
//                 },
//             }
//         );

//         const summary = response.data.summary || 'No summary generated.';

//         res.status(200).json({ summary });
//     } catch (error) {
//         console.error('ApyHub error:', error.message);
//         res.status(500).json({ error: 'Summary generation failed' });
//     }
// };

// module.exports = { summarizeTodos };
const axios = require('axios');
require('dotenv').config();

const summarizeTodos = async (req, res) => {
    try {
        const { todos } = req.body;

        if (!todos || !Array.isArray(todos)) {
            return res.status(400).json({ error: 'Todos array is required' });
        }

        const textToSummarize = todos
            .map((todo, index) => `${index + 1}. ${todo.title} - ${todo.description || ''}`)
            .join('\n');

        const apyKey = process.env.APYHUB_API_KEY;

        if (!apyKey) {
            return res.status(500).json({ error: 'ApyHub API key missing' });
        }

        const response = await axios.post(
            'https://api.apyhub.com/generate/text/summarize',
            {
                content: textToSummarize,
                length: 'short',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'apy-token': apyKey,
                },
            }
        );

        const summary = response.data.data || 'No summary generated.';

        res.status(200).json({ summary });
    } catch (error) {
        console.error('ApyHub error:', error.message);
        res.status(500).json({ error: 'Summary generation failed' });
    }
};

module.exports = { summarizeTodos };
