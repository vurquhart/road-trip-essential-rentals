from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files from the images directory
app.mount("/images", StaticFiles(directory="C:\\Apps\\Midterm Project_v2\\images"), name="images")

@app.get("/welcome")
async def get_welcome_message():
    return {"message": "Welcome to Road Trip Essential Rentals! Enjoy the ride and explore our essentials."}
