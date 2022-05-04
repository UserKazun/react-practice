CREATE TABLE tasks (
    id INT auto_increment primary key,
    task_name varchar(20),
    task_description text,
    created_at datetime not null default,
    updated_at datetime not null default current_timestamp on update current_timestamp
)
