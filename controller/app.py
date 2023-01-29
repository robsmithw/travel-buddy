from flask import Flask, request
from datetime import datetime
import requests
import sqlite3
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

@app.route("/filter")
def filter_events():
    args = request.args
    startdate = args.get("startdate")
    enddate = args.get("enddate")
    location = args.get("location")
    url = "https://api.predicthq.com/v1/events/?active.gte={startdate}&active.lte={enddate}".format(startdate=startdate,enddate=enddate)
    payload={}
    headers = {
      'Authorization': 'Bearer Cmoq-4-YDy5BBAP815_xJE4wBDE2VaeyhxsF8Aej'
    }
    response = requests.request("GET", url, headers=headers, data=payload)

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


@app.route("/user", methods =['POST'])
def add_user():
  event_form = request.form['user_form']
  first_name = event_form['first_name']
  last_name = event_form['last_name']
  username = event_form['username']
  password = event_form['password']
  sqliteConnection = sqlite3.connect('backend/travel.sqlite3')
  cursor = sqliteConnection.cursor()
  sqlite_insert_query = """INSERT INTO user (first_name, last_name, username, password) VALUES ({first_name}, {last_name}, {username}, {password}""".format(first_name = first_name, 
  last_name = last_name, username = username, password = password)
  user = cursor.execute(sqlite_insert_query)
  cursor.close()
  sqliteConnection.close()
  return json.dumps(user)