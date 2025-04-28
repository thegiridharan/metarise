# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

from routes import settings, github

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://metarise.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
MONGO_URI = os.getenv("MONGO_URI")
client = AsyncIOMotorClient(MONGO_URI)
db = client["seo_database"]

# Dependency injection for routes
app.include_router(settings.router, prefix="/settings")
app.include_router(github.router, prefix="/github")

# Shared DB access
@app.on_event("startup")
async def startup_db():
    app.state.db = db
