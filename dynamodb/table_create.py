import boto3


dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('users')

table = dynamodb.create_table(
    TableName='users',
    KeySchema=[{'AttributeName': 'email', 'KeyType': 'HASH'}],
    AttributeDefinitions=[{'AttributeName': 'email', 'AttributeType': 'S'}],
    BillingMode='PAY_PER_REQUEST'  # safer for small scale
)
