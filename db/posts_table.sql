create table posts (
    id serial primary key,
    title text,
    img text,
    content text,
    author_id integer REFERENCES users(id)
)