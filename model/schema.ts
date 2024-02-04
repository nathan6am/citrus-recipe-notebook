import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "user_settings",
      columns: [
        { name: "user_id", type: "string" },
        { name: "settings_json", type: "string" },
      ],
    }),
  ],
});
