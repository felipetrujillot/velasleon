/**
 * Declaración manual de la base de datos SAP
 * de momento no se usarán migraciones hasta que pasen a la versión 1.0 en drizzle
 * @author ID
 */
import { varchar, int, timestamp, mysqlSchema } from "drizzle-orm/mysql-core";
const config = useRuntimeConfig();
export const mySchema = mysqlSchema(config.dbName);

/**
 *
 */
export const usuarios = mySchema.table("usuarios", {
  id_usuario: int("id_usuario").autoincrement().notNull(),
  id_empresa: int("id_empresa").notNull(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: int("role").notNull(),
  id_model: int("id_model").notNull(),
  id_system_prompt: int("id_system_prompt").notNull(),
  activo: int("activo").notNull().default(1),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").onUpdateNow(),
});

/**
 *
 */
export const empresas = mySchema.table("empresas", {
  id_empresa: int("id_empresa").autoincrement().notNull(),
  nombre_empresa: varchar("nombre_empresa", { length: 255 }).notNull(),
  activo: int("activo").notNull().default(1),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").onUpdateNow(),
});

/**
 *
 */
export const productos = mySchema.table("productos", {
  id_producto: int("id_producto").autoincrement().notNull(),
  nombre_producto: varchar("nombre_producto", { length: 255 }).notNull(),
  imagen_producto: varchar("imagen_producto", { length: 5000 }).notNull(),
  precio: int("precio").notNull(),
  activo: int("activo").notNull().default(1),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").onUpdateNow(),
});

/**
 *
 */
export const passwords_reset = mySchema.table("passwords_reset", {
  id_password_reset: int("id_password_reset").primaryKey().autoincrement(),
  token: varchar("token", { length: 250 }).notNull(),
  id_user: int("id_user").notNull(),
  active: int("active").default(1).notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at"),
});

export type Usuarios = typeof usuarios.$inferSelect;
export type PasswordsReset = typeof passwords_reset.$inferSelect;
