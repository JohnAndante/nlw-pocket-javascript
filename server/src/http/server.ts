import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
const app = fastify().withTypeProvider<ZodTypeProvider>();
app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('🚀 Server is running on port 3333')
    });
