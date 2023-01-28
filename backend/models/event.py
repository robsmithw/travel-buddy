from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

# event class to get the event id, location id, name of the event, type of event (category), the address of the event,
# date of the event, start, and end times of the evnet.
class event(db.Model):
    event_id = db.Column(db.Integer, primary_key=True)
    location_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    event_address = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Text, nullable=False) 
    start_time = db.Column(db.Text, nullable=False)
    end_time= db.Column(db.Text, nullable=False)
    
    def __repr__(self):
        return '<User %r>' % self.username