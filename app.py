from flask import Flask
from routes.appointments import appointments
from utils.db import db

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:123456@localhost/appointmentsdb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(appointments)
