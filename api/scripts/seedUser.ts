// scripts/seedUserDirect.ts
import pkg from 'pg';
const { Client } = pkg;

async function seed() {
  const client = new Client({
    host: process.env.POSTGRES_HOST || 'db',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'M6Lu7tB$fdyNKDi!E0ftA<KvjY27',
    database: process.env.POSTGRES_DB || 'chit-chat',
  });

  await client.connect();

  const username = 'testuser';
  const passwordHash = '$2b$10$jltKgzdvkYkOQj3kUNNoDui/x5dMTDkuGpmW6fa.81x0HY77.mg1i';
  const fullname = 'Test User';

  await client.query(
    `INSERT INTO accounts (username, password, fullname)
     VALUES ($1, $2, $3)
     ON CONFLICT (username) DO NOTHING`,
    [username, passwordHash, fullname]
  );

  console.log('Seed complete!');
  await client.end();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});