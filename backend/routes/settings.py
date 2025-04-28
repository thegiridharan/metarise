# routes/settings.py
from fastapi import APIRouter, Request, HTTPException
from models.setting_model import SettingModel

router = APIRouter()

@router.post("/set")
async def set_setting(request: Request, data: SettingModel):
    db = request.app.state.db
    await db.settings.update_one(
        {"key": data.key},
        {"$set": {"value": data.value}},
        upsert=True
    )
    return {"message": "Setting updated"}

@router.get("/get/{key}")
async def get_setting(request: Request, key: str):
    db = request.app.state.db
    setting = await db.settings.find_one({"key": key})
    if not setting:
        raise HTTPException(status_code=404, detail="Setting not found")
    return {"key": setting["key"], "value": setting["value"]}
