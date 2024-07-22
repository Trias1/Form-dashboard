import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const DashboardForms=pgTable('dashboardFormss', {
    id:serial('id').primaryKey(),
    nameForm:text('nameform').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull()
})