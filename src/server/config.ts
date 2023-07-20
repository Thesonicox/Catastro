
export const config = {
    DB_HOST: process.env.DB_HOST ??  'localhost',
    DB_DATABASE: process.env.DB_DATABASE ?? 'catastrodb',
    DB_USER: process.env.DB_USER ?? 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '1234',
    DB_PORT: process.env.DB_PORT ?? 5432,
    DB_SCHEMA: 'public',
}