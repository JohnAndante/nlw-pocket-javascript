import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { createGoalRoute } from './routes/create-goal';
import { createCompletionRoute } from './routes/create-goal-completion';
import { getPendingGoalsRoute } from './routes/get-week-pending-goals';
import { getWeekSummaryRoute } from './routes/get-week-summary';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
    origin: '*',
});

app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSummaryRoute);

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('🚀 Server is running on port 3333')
    });
