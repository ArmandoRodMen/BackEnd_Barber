from utils.db import db

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(20))  
    date = db.Column(db.Date)  
    hour = db.Column(db.Time) 
    service = db.Column(db.String(100))

    def __init__(self, fullname, email, phone, date, hour, service):
        self.fullname = fullname
        self.email = email
        self.phone = phone
        self.date = date
        self.hour = hour
        self.service = service
