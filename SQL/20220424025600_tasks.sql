CREATE TABLE tasks (
    id INT auto_increment primary key,
    task_name varchar(20),
    task_description text,
    created_at datetime,
    updated_at datetime
)
