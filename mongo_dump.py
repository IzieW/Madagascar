import pymongo
import json
from pymongo import MongoClient, InsertOne
import os
from dotenv import load_dotenv

load_dotenv()

URL = os.getenv("MONGODB_URI")

client = pymongo.MongoClient(URL)
db = client.DB
collection = db.scripts
requesting =[]
with open("script.json", "r") as f:
    data = json.load(f)["script"]
    requesting.append(InsertOne(data))

result = collection.bulk_write(requesting)
client.close()



