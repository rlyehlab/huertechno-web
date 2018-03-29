#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, jsonify
from config import DevelopmentConfig




app = Flask(__name__)
app.config.from_object(DevelopmentConfig)



@app.route('/')
def index():
    titulo = "home"
    return render_template('index.html', titulo=titulo)

@app.route('/about')
def about():
    titulo = "about"
    return render_template('about.html', titulo=titulo)

@app.route('/contact')
def contact():
    titulo = "contact"
    return render_template('contact.html', titulo=titulo)



if __name__ == '__main__':
    app.run()
