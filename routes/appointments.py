from flask import Blueprint, render_template, request, redirect, url_for
from models.appointment import Appointment
from utils.db import db

appointments = Blueprint("appointments", __name__)


@appointments.route("/")
def home():
    appointments = Appointment.query.all()
    return render_template("index.html", appointments=appointments)


@appointments.route("/book", methods=["POST"])
def add_appointment():
    fullname = request.form["fullname"]
    email = request.form["email"]
    phone = request.form["phone"]
    date = request.form["date"]
    hour = request.form["hour"]
    service = request.form["service"]

    new_appointment = Appointment(fullname, email, phone, date, hour, service)
    db.session.add(new_appointment)
    db.session.commit()

    return redirect(url_for("appointments.home"))


@appointments.route("/update/<id>", methods=["POST", "GET"])
def update_appointment(id):
    appointment = Appointment.query.get(id)

    if request.method == "POST":
        appointment.fullname = request.form["fullname"]
        appointment.email = request.form["email"]
        appointment.phone = request.form["phone"]
        appointment.date = request.form["date"]
        appointment.hour = request.form["hour"]
        appointment.service = request.form["service"]
        db.session.commit()
        return redirect(url_for("appointments.adminAppointments"))
    return render_template("update.html", appointment=appointment)


@appointments.route("/delete/<id>")
def delete_appointment(id):
    appointment = Appointment.query.get(id)
    db.session.delete(appointment)
    db.session.commit()
    return redirect(url_for("appointments.home"))


@appointments.route("/comments")
def comments():
    return render_template("comments.html")


@appointments.route("/adminAppointments")
def adminAppointments():
    appointments = Appointment.query.all()
    return render_template("adminAppointments.html", appointments=appointments)
