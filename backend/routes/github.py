# routes/github.py
from fastapi import APIRouter, Request
from datetime import datetime, timezone
import requests
import os

router = APIRouter()

GITHUB_URL = "https://api.github.com/users/{username}/repos"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
headers = {"Authorization": f"token {GITHUB_TOKEN}"}

@router.get("/{username}")
async def get_github_repos(username: str):
    url = GITHUB_URL.format(username=username)
    response = requests.get(url, headers=headers)
    return response.json()

@router.post("/store-repos")
async def store_repos(request: Request, repo_data: dict, collection_name: str):
    db = request.app.state.db
    collection = db[collection_name]

    # Store only once, update if exists
    filter_query = {"repo_data.name": repo_data.get("name")}
    update_query = {
        "$set": {
            "repo_data": repo_data,
            "stored_at": datetime.now(timezone.utc).isoformat()
        }
    }

    result = await collection.update_one(filter_query, update_query, upsert=True)
    return {"message": "Repo stored/updated"}
