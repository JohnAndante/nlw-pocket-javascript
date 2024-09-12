import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoal } from '../../functions/create-goal';

export const createGoalRoute: FastifyPluginAsyncZod = async (app) => {

    app.post('/goals', {
        schema: {
            body: z.object({
                title: z.string(),
                desiredWeeklyFrequency: z.number().int().min(1).max(7),
            }),
        }
    }, async (request, response) => {
        const { title, desiredWeeklyFrequency } = request.body;

        const data = await createGoal({
            title,
            desiredWeeklyFrequency,
        });

        return response.status(200).send({
            message: "Meta criada com sucesso!",
            data
        });
    });

};
