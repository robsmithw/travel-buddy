from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

# attendance class that returnrs the attendance, customer, and event IDs
# Test
class attendance(db.Model):
    attendance_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, primary_key=True)
    
    def __repr__(self):
        return '<User %r>' % self.username