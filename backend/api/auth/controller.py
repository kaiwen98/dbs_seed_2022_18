from flask import Blueprint, jsonify, request
import bcrypt
from api.user import service as user_service
import api.auth.service as auth_service
import uuid
from flask_api import status
import json
from api.auth.service import auth

auth_api = Blueprint("auth", __name__)

@auth_api.route("/login", methods=["POST"])
@auth.login_required
def get_login():
    return auth.current_user()

@auth_api.route("/register", methods=["POST"])
def post_register():
    req_body = request.json
    if req_body is None:
        return (
            "Invalid request!",
            status.HTTP_400_BAD_REQUEST
        )
    username = req_body.get("username", None)
    firstname = req_body.get("firstname", None)
    lastname = req_body.get("lastname", None)
    password = req_body.get("password", None)
    email = req_body.get("email", None)
    address = req_body.get("address", None)

    user = auth_service.register_user(
        username,
        firstname,
        lastname,
        password,
        email,
        address

    )

    return (
        jsonify(
            success=True,
            data=user.serialize()
        ),
        status.HTTP_200_OK
    )
