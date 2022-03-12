from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Request(db.Model):
    __tablename__="request"
    req_id = db.Column(db.Integer,primary_key=True, unique=True)
    dob = db.Column(db.String(345), nullable = False)
    gender = db.Column(db.Text,nullable = False)
    allergy=db.Column(db.String(345))
    medication=db.Column(db.String(345))
    phone_number=db.Column(db.String(345))
    pregnant = db.Column(db.Text,nullable = False)
    description=db.Column(db.String(345))
    symptom=db.Column(db.String(345))
    location=db.Column(db.String(345))
