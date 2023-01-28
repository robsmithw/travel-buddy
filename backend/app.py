from flask import Flask
import requests
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/events")
def get_events():
    response = requests.get(
    url="https://api.predicthq.com/v1/events/",
    headers={
      "Authorization": "Bearer Cmoq-4-YDy5BBAP815_xJE4wBDE2VaeyhxsF8Aej",
      "Accept": "application/json"
    }
    )
    return response.json()