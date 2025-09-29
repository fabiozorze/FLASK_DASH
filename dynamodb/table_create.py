import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

# First, delete the old table (if it exists)
try:
    old_table = dynamodb.Table('users')
    old_table.delete()
    print("Old table deleted successfully")
    
    # Wait for deletion to complete
    old_table.wait_until_not_exists()
    print("Table deletion confirmed")
except Exception as e:
    print(f"Table might not exist or already deleted: {e}")

# Create new table with UUID primary key
table = dynamodb.create_table(
    TableName='users',
    KeySchema=[
        {'AttributeName': 'user_id', 'KeyType': 'HASH'}  # Primary key changed to user_id
    ],
    AttributeDefinitions=[
        {'AttributeName': 'user_id', 'AttributeType': 'S'},
        {'AttributeName': 'email', 'AttributeType': 'S'}  # For GSI
    ],
    GlobalSecondaryIndexes=[
        {
            'IndexName': 'email-index',  # GSI for email lookups
            'KeySchema': [
                {'AttributeName': 'email', 'KeyType': 'HASH'}
            ],
            'Projection': {'ProjectionType': 'ALL'},  # Include all attributes
        }
    ],
    BillingMode='PAY_PER_REQUEST'
)

print("New table created with UUID primary key!")
print("Waiting for table to be active...")
table.wait_until_exists()
print("✅ Table is ready!")
