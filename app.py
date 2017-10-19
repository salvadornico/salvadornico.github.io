from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__, static_folder="dist/static", template_folder="dist")
CORS(app)

app.config["MONGO_DBNAME"] = "salvadornico"
app.config["MONGO_URI"] = "mongodb://localhost:27017/salvadornico"

mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/json-test")
def api():
    return jsonify(title="API Test successful!", greeting="Salut!")


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


app.secret_key = "secret123"
app.jinja_env.auto_reload = True
app.config["TEMPLATES_AUTO_RELOAD"] = True
