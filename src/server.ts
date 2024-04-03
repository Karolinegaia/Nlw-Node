import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return 'Hello'
})
app.listen({ port: 3000}).then(() => {
    console.log('HTTP serve running!')
})