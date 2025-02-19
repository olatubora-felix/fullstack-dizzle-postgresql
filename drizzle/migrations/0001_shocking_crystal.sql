ALTER TABLE "users" ALTER COLUMN "timestamptz" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "timestamptz" SET DEFAULT now();