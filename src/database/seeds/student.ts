import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("student").del();

    // Inserts seed entries
    await knex("student").insert([
        { id: 1, name: "Lucas", enrollment: "12345" }
    ]);
};
