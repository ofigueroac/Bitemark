CREATE TABLE "foods" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"serving_size" text NOT NULL,
	"protein" integer NOT NULL,
	"carbohydrates" integer NOT NULL,
	"fat" integer NOT NULL,
	CONSTRAINT "foods_name_unique" UNIQUE("name")
);
