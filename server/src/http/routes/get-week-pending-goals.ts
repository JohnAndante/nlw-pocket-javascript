import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals';

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {

    app.get('/pending-goals', async (request, response) => {
        const data = await getWeekPendingGoals();

        return response.status(200).send(data);
    });

};
