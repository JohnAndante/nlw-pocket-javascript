import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from 'dayjs';

async function seed() {
    await db.delete(goalCompletions)
    await db.delete(goals)

    const result = await db.insert(goals).values([
        { title: 'Learn to cook', desiredWeeklyFrequency: 3 },
        { title: 'Learn to dance', desiredWeeklyFrequency: 2 },
        { title: 'Learn to code', desiredWeeklyFrequency: 5 },
        { title: 'Learn to play guitar', desiredWeeklyFrequency: 4 },
        { title: 'Learn to paint', desiredWeeklyFrequency: 3 },
    ]).returning();

    const startOfWeek = dayjs().startOf('week');

    await db.insert(goalCompletions).values([
        { goalId: result[0].id, completedAt: startOfWeek.toDate() },
        { goalId: result[1].id, completedAt: startOfWeek.add(1, 'day').toDate() },
        { goalId: result[2].id, completedAt: startOfWeek.add(1, 'day').toDate() },
        { goalId: result[3].id, completedAt: startOfWeek.add(2, 'day').toDate() },
        { goalId: result[4].id, completedAt: startOfWeek.add(2, 'day').toDate() },
    ]);
};

seed()
    .finally(() => client.end());
