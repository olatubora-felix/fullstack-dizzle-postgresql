CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"timestamptz" text DEFAULT 'now()' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
