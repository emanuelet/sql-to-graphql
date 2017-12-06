--This scrit requires the following permission
--GRANT VIEW Definition TO graphql

SELECT 
    c.name 'column_name',
    t.Name 'data_type',
	c.column_id,
    c.max_length 'max_length',
    c.precision ,
    c.scale ,
    c.is_nullable,
    i.is_primary_key,
    t.*
FROM    
    sys.columns c
INNER JOIN 
    sys.types t ON c.user_type_id = t.user_type_id
INNER JOIN
	sys.objects o ON o.object_id = c.object_id
LEFT OUTER JOIN 
    sys.index_columns ic ON ic.object_id = c.object_id AND ic.column_id = c.column_id
LEFT OUTER JOIN 
    sys.indexes i ON ic.object_id = i.object_id AND ic.index_id = i.index_id
WHERE
    c.object_id = OBJECT_ID(schema_name(o.schema_id) + '.Product')
ORDER BY c.column_id


select * from SalesLT.Product
