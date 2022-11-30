from flask import Blueprint, jsonify, request
import bcrypt
from api.user import service as user_service
import api.auth.service as auth_service
import uuid
from flask_api import status
import json

auth_api = Blueprint("auth", __name__)

@auth_api.route("/login", methods=["GET"])
def get_login():
    return "login"

@auth_api.route("/register", methods=["POST"])
def post_register():
    req_body = request.json
    if req_body is None:
        return (
            "Invalid request!",
            status.HTTP_400_BAD_REQUEST
        )
    username = req_body.get("username", None)
    password = req_body.get("password", None)
    email = req_body.get("email", None)

    user = auth_service.register_user(
        username,
        password,
        email
    )

    return (
        jsonify(
            success=True,
            data=user.serialize()
        ),
        status.HTTP_200_OK
    )
