insert into posts
(title, img, content)
values
($1, $2, $3)
returning *;