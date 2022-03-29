from flask import Flask, render_template, request
import requests
import os
app = Flask(__name__)
app.config["WEATHER_KEY"] = os.environ['WEATHER_KEY']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_weather')
def get_weather():
    args = dict(request.args)
    args['appid'] = app.config['WEATHER_KEY']
    r = requests.get('https://api.openweathermap.org/data/2.5/onecall', args)
    if r.status_code in (200, 304):
        return r.content, r.status_code
    else: 
        return r.status_code
    
