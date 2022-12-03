from flask import Blueprint, json, jsonify, request
from api.user.service import read_all_user, read_one_user
from config.db import db
from .models.user import User
from .service import create_user
from flask_api import status

user_api = Blueprint("user", __name__)

@user_api.route("", methods=["POST"])
def post_create():
    req = request.get_json()

    if not req:
        return (
          "Invalid request!",
          status.HTTP_400_BAD_REQUEST
        )

    user = create_user(
        req["username"],
        req["password_salt"],
        req["password_hash"],
        req["email"],
        req["id"],
    )

    return (
        jsonify(success=True, data=user.serialize()),
        status.HTTP_200_OK,
        {"Content-Type": "application/json"},
    )

@user_api.route("", methods=["GET"])
def get_read() -> list[User]:
    print("GET")
    return read_all_user()


@user_api.route("/updateUser", methods=["PATCH"])
def update_user():
    req = request.get_json()

    if not req:
        return (
          "Invalid request!",
          status.HTTP_400_BAD_REQUEST
        )

    user = update_user(
        req["Username"],
        req["FirstName"],
        req["LastName"],
        req["Email"],
        req["Address"]
    )

    return (
        jsonify(success=True, data=user.serialize()),
        status.HTTP_200_OK,
        {"Content-Type": "application/json"},
    )

@user_api.route("/updateUserPassword", methods=["PATCH"])
def update_user_password():
    req = request.get_json()
    test = read_one_user(UserID=1)

    
    print(test)
    return "10"