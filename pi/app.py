# Simple python script to poll api
import requests
import time

from waveshare_epd import epd4in2
from PIL import Image, ImageDraw,ImageFont

# Define the URL of the API you want to poll
api_url = "https://jsonplaceholder.typicode.com/posts/1"

epd = epd4in2.EPD()
print("init and clear")
epd.init()
epd.Clear()
Himage = Image.new('1', (epd.width, epd.height), 255)
draw = ImageDraw.Draw(Himage)
draw.text((10,0), 'hello world', fill = 0)
time.sleep(10)
epd.Clear()

# Open a text file in append mode
# with open("logs.txt", "a") as file:
#     file.write("Begin Polling API...\n")

#     while True:
#         response = requests.get(api_url)
        
#         if response.status_code == 200:
#             data = response.json()
#             file.write(f"API Response: {data}\n")
#         else:
#             file.write(f"Failed to retrieve data from the API. Status Code: {response.status_code}\n")
        
#         file.flush()  # Ensure data is written immediately to the file
#         time.sleep(5)
