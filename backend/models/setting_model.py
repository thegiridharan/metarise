from pydantic import BaseModel

class SettingModel(BaseModel):
    key: str
    value: str
