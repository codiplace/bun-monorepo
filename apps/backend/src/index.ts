import { Elysia } from 'elysia'

const app = new Elysia().get('/hello-world', () => 'Hello World').listen(3000)

export type App = typeof app

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
