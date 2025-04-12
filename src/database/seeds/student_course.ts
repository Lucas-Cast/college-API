import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("student_courses").del();

    // Inserts seed entries
    await knex("student_courses").insert([
        { id: 1, student_id: 1, course_id: 1 },
    ]);
};
