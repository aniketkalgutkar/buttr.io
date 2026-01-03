import { neon } from '@neondatabase/serverless';

async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres database
    // let query: TemplateStringsArray = 
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }