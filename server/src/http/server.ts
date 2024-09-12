import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals';
import { createGoalRoute } from './routes/create-goal';
import { createCompletionRoute } from './routes/create-goal-completion';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

});

app.register(createGoalRoute);
app.register(createCompletionRoute);

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('🚀 Server is running on port 3333')
    });
