from flask import Flask, request
from datetime import datetime
import sqlite3
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

@app.route("/save_events",methods = ['POST'])
def save_events():
    event_form = request.form['event_form']
    # assume event form passes userId and many eventIds (event ids in an array)
    sqliteConnection = sqlite3.connect('backend/travel.sqlite3')
    cursor = sqliteConnection.cursor()
    sqlite_insert_query = """INSERT INTO Attendance (customer_id, event_id) VALUES ({user_id}, {event_id})"""
    cursor.execute(sqlite_insert_query)
    cursor.close()
    sqliteConnection.close()
    return