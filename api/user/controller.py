from flask import Blueprint, jsonify, request
from config.db import db
from .models.user import User
user_api = Blueprint(
  'user',
  __name__
)

@user_api.route('', methods=['POST'])
def post_create():
  req = request.get_json(force=True)
  user = User(
    username=req["username"],
    password_salt=req["password_salt"],
    email=req["email"],
    id=req["id"]
  )
  db.session.add(user)
  db.session.commit()

  return jsonify(
    success=True 
  ), 200, {"Content-Type": "application/json"}

@user_api.route('', methods=['GET'])
def get_read():
  return 'login POST'

