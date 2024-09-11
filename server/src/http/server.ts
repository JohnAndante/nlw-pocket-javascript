import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { createGoal } from '../functions/create-goal'
import z from 'zod'
const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post('/completions', {
    schema: {
        body: z.object({
            goalId: z.string(),
        }),
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

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('🚀 Server is running on port 3333')
    });
