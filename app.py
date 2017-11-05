from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__, static_folder="dist/static", template_folder="./")
CORS(app)

app.config["MONGO_DBNAME"] = "salvadornico"
app.config["MONGO_URI"] = "mongodb://nico:admin@ds243055.mlab.com:43055/salvadornico"

mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/skills", methods=["GET"])
def get_all_skills():
    skills = mongo.db.skills
    output = []
    for skill in skills.find().sort("category", 1):
        output.append({
            "category": skill["category"],
            "name": skill["name"],
            "icon": skill["icon"],
            "url": skill["url"]
        })
    return jsonify({"result": output})


@app.route("/skills/<string:id>/", methods=["GET"])
def get_one_skills(id):
    skills = mongo.db.skills
    skill = skills.find_one({"_id": id})
    if skill:
        output = {
            "category": skill["category"],
            "name": skill["name"],
            "icon": skill["icon"],
            "url": skill["url"]
        }
    else:
        output = "No such skill found"
    return jsonify({"result": output})


@app.route("/things", methods=["GET"])
def get_all_things():
    things = mongo.db.things
    output = []
    for thing in things.find():
        output.append({
            "name": thing["name"],
            "image": thing["image"],
            "link": thing["link"]
        })
    return jsonify({"result": output})


app.secret_key = "secret123"
app.jinja_env.auto_reload = True
app.config["TEMPLATES_AUTO_RELOAD"] = True
