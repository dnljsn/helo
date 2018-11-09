create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer REFERENCES users(id)
)