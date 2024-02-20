
create schema "public";

CREATE TABLE "public"."Message" ("id" serial NOT NULL, "user" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("id") );
