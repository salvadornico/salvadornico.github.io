from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__, static_folder="dist/static", template_folder='dist')
CORS(app)

app.config['MONGO_DBNAME'] = 'flask_test'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/flask_test'

mongo = PyMongo(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/json")
def api():
    return jsonify(title="API Test successful!", greeting="Salut!")


@app.route('/stuff', methods=['GET'])
def get_all_stuff():
    stuff = mongo.db.stuff
    output = []
    for s in stuff.find():
        output.append({
            'name': s['name'],
            'type': s['type'],
            'number': s['number']
        })
    return jsonify({'result': output})


@app.route('/stuff/<string:name>/', methods=['GET'])
def get_one_stuff(name):
    stuff = mongo.db.stuff
    s = stuff.find_one({'name': name})
    if s:
        output = {'name': s['name'], 'type': s['type'], 'number': s['number']}
    else:
        output = "No such name"
    return jsonify({'result': output})


app.secret_key = "secret123"
app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True
