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
      headers = {
      "Authorization": "Bearer Cmoq-4-YDy5BBAP815_xJE4wBDE2VaeyhxsF8Aej",
      "Accept": "application/json"
     }
    )
    return response.json()

@app.route('/events/<id>')
def get_event(id):

    url = "https://api.predicthq.com/v1/events/?id={id}".format(id=id)

    payload = {}
    headers = {
      'Authorization': 'Bearer Cmoq-4-YDy5BBAP815_xJE4wBDE2VaeyhxsF8Aej'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
  
    return response.text

@app.route('/places/<q>')
def get_location(q):

    url = "https://api.predicthq.com/v1/events/?q={q}".format(q=q)

    payload = {}
    headers = {
      'Authorization': 'Bearer Cmoq-4-YDy5BBAP815_xJE4wBDE2VaeyhxsF8Aej'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
  
    return response.text
