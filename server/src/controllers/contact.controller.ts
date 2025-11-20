import { Request, Response } from 'express';

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Mock email sending
        console.log('--- New Contact Message ---');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        console.log('---------------------------');

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
