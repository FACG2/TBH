BEGIN ;
DROP TABLE IF EXISTS users ,  notes CASCADE ;
CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "notes" (
	"id" serial NOT NULL,
	"content" TEXT NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT notes_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO users  (username,password) VALUES ('Qamar93',123456),
('Ahmed95',123456),
('Mahmmoud96',123456),
('Ghadeer93',123456);

INSERT INTO notes (content,user_id) VALUES ('hey Qamar',1),
('you have nice haircut',2),
('I like you ',3),
('you are funny',4);

ALTER TABLE "notes" ADD CONSTRAINT "notes_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

COMMIT ;
