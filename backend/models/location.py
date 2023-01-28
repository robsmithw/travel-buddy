from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(120), unique=True, nullable=False)
    city = db.Column(db.String(80), unique=True, nullable=False)
    state = db.Column(db.String(80), unique=True, nullable=False) 
    country = db.Column(db.String(120), unique=True, nullable=False)
    zip_code = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float, primary_key=True)
    longatide = db.Column(db.Float, primary_key=True)
    
    def __repr__(self):
        return '<User %r>' % self.username