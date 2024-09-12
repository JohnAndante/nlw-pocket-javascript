import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoalCompletion } from '../../functions/create-goal-completion';

export const createCompletionRoute: FastifyPluginAsyncZod = async (app) => {

    app.post('/completions', {
        schema: {
            body: z.object({
                goalId: z.string(),
            }),
        }
    }, async (request, response) => {
        const { goalId } = request.body;

        const data = await createGoalCompletion({
            goalId,
        });

        return response.status(200).send({
            message: "Frequência registrada com sucesso!",
            data
        });
    });

};
