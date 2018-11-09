insert into customer
(cust_email, cust_hash)
values
($1, $2)
returning *;